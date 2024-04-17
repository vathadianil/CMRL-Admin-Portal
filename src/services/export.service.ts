import { Injectable } from '@angular/core';
import { saveAs } from 'file-saver';
import * as ExcelJS from 'exceljs';
import * as logoFile from '../assets/img/logoBase64';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ExportService {
  exportToExcel(
    data: any[],
    fileName: string,
    fileType: string,
    columnsToExport: string[],
    params: { key: string; value: any }[],
    data2?: any[],
    columnsToExport2?: string[],
    totalAmount?: number | string
  ): void {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet(fileName);
    this.addLogotoWorkSheet(workbook, worksheet, logoFile);
    const mergeCellsUptoChar = 'F';

    this.addReportNameAndParameters(
      fileName,
      params,
      mergeCellsUptoChar,
      worksheet
    );
    this.addEmptyRow(1, worksheet);

    const table1 = this.prepareDataset(data, columnsToExport);
    this.addHeaderRow(columnsToExport, worksheet);

    this.addTableData(table1, worksheet);

    this.addEmptyRow(1, worksheet);

    this.addHeaderRow(columnsToExport2, worksheet);
    if (data2 && columnsToExport2) {
      const table2 = this.prepareDataset(data2, columnsToExport2);
      this.addTableData(table2, worksheet);
    }

    this.setWidthOfCells(worksheet, columnsToExport, table1);

    this.addFooterRow(mergeCellsUptoChar, worksheet);

    workbook.xlsx.writeBuffer().then((buffer) => {
      const blob = new Blob([buffer], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      });

      saveAs(blob, fileName + '.xlsx');
    });
  }

  calculateMergeCellsChar(headerLength: number) {
    if (headerLength <= 26) {
      return String.fromCharCode(64 + headerLength);
    } else if (headerLength > 26 && headerLength <= 54) {
      const newHeadersLength = headerLength - 26;
      return 'A' + String.fromCharCode(64 + newHeadersLength);
    } else {
      const newHeadersLength = headerLength - 54;
      return 'B' + String.fromCharCode(64 + newHeadersLength);
    }
  }

  addReportNameAndParameters(
    sheetName: string,
    params: any,
    mergeCellsUptoChar: string,
    workSheet: any
  ) {
    workSheet.mergeCells(`D1:${mergeCellsUptoChar}1`);
    workSheet.getCell('D1').value = sheetName;

    workSheet.getCell('D1').font = {
      name: 'Arial',
      family: 4,
      size: 12,
      underline: 'single',
      bold: true,
      color: { argb: '0080ff' },
    };
    workSheet.getCell('D1').alignment = {
      vertical: 'top',
      horizontal: 'right',
    };

    //adding parameters
    let paramsLength = params.length;
    if (paramsLength > 0) {
      params.forEach((param: any, index: any) => {
        workSheet.mergeCells(`D${index + 2}:${mergeCellsUptoChar}${index + 2}`);
        workSheet.getCell(`D${index + 2}`).value =
          `${param.key.toUpperCase()}: ` + param.value;
        workSheet.getCell(`D${index + 2}`).alignment = {
          vertical: 'top',
          horizontal: 'right',
        };
        workSheet.getCell(`D${index + 2}`).font = {
          name: 'Arial',
          family: 4,
          size: 10,
          bold: true,
          color: { argb: '0080ff' },
        };
      });
    }
  }

  setWidthOfCells(
    worksheet: any,
    headersTable1: any,
    datasetTable1: any,
    headerTable2?: any,
    datasetTable2?: any
  ) {
    // Set width for columns dynamically based on header size
    const columnWidths1 = headersTable1.map((header: any) =>
      this.adjustWidthOfCell(headersTable1, datasetTable1)
    );
    let columnWidths2: any;
    if (headerTable2 && datasetTable2) {
      columnWidths2 = headerTable2.map((header: any) =>
        this.adjustWidthOfCell(headerTable2, datasetTable2)
      );
    }

    const findMax = (columns: any[]) => {
      let width = 0;
      columns &&
        columns.forEach((colWidth) => {
          width = Math.max(colWidth, width);
        });
      return width;
    };

    worksheet.columns.forEach((column: any, columnIndex: any) => {
      let maxWidth: any;
      if (headerTable2 && datasetTable2) {
        maxWidth = Math.max(
          findMax(columnWidths1[columnIndex] || []),
          findMax(columnWidths2[columnIndex] || [])
        );
      } else {
        maxWidth = findMax(columnWidths1[columnIndex] || []);
      }
      column.width = Math.max(Number(maxWidth), 20); // Limit the width if desired
      column.eachCell({ includeEmpty: true }, (cell: any) => {
        cell.alignment = { horizontal: 'center', vertical: 'middle' };
      });
    });
  }

  adjustWidthOfCell(headers: any, data: any) {
    const widths = headers.map((header: any) => header.length);
    data.forEach((row: any) => {
      row.forEach((cell: any, index: any) => {
        widths[index] = Math.max(widths[index], String(cell).length);
      });
    });
    return widths;
  }

  addLogotoWorkSheet(workbook: any, workSheet: any, logoFile: any) {
    const logo = workbook.addImage({
      base64: logoFile.base64StringUrl,
      extension: 'png',
    });
    workSheet.mergeCells('A1:A4');
    workSheet.addImage(logo, 'A1:A4');
    workSheet.getCell(`A1`).border = {
      top: { style: 'thick' },
      left: { style: 'thick' },
      bottom: { style: 'thick' },
      right: { style: 'thick' },
    };
  }

  addHeaderRow(header: any, workSheet: any) {
    const headerRow = workSheet.addRow(header);
    headerRow.eachCell((cell: any, number: any) => {
      headerRow.font = { bold: true };
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '97b5f4' },
        bgColor: { argb: 'FF0000FF' },
      };
      cell.border = {
        top: { style: 'thin' },
        left: { style: 'thin' },
        bottom: { style: 'thin' },
        right: { style: 'thin' },
      };
    });
  }

  mergeAndPrepareHeaderCells(
    startCell: string,
    endCell: string,
    cellValue: any,
    workSheet: any
  ) {
    if (endCell) {
      workSheet.mergeCells(`${startCell}:${endCell}`);
    }

    workSheet.getCell(`${startCell}`).value = cellValue;
    workSheet.getCell(`${startCell}`).font = { bold: true };
    workSheet.getCell(`${startCell}`).fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: '97b5f4' },
      bgColor: { argb: 'FF0000FF' },
    };
    workSheet.getCell(`${startCell}`).border = {
      top: { style: 'thin' },
      left: { style: 'thin' },
      bottom: { style: 'thin' },
      right: { style: 'thin' },
    };
  }

  addBoldRow(row: any, worksheet: any) {
    const headerRow = worksheet.addRow(row);
    headerRow.font = { bold: true };
    headerRow.eachCell((cell: any, number: any) => {
      cell.border = {
        top: { style: 'thin' },
        left: { style: 'thin' },
        bottom: { style: 'thin' },
        right: { style: 'thin' },
      };
    });
  }

  addTitleRow(title: any, worksheet: any, columnsArr: any) {
    let rowCount = worksheet.rowCount + 2;
    const mergeCellsUptoChar = 'E';
    worksheet.mergeCells(`A${rowCount}:${mergeCellsUptoChar}${rowCount}`);
    worksheet.getCell(`A${rowCount}`).value = `${title.toUpperCase()}`;
    worksheet.getCell(`A${rowCount}`).fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: '97b5f4' },
      bgColor: { argb: 'FF0000FF' },
    };
    worksheet.getCell(`A${rowCount}`).font = {
      family: 4,
      size: 14,
      bold: true,
    };
  }

  prepareDatesetAndAddRow(datasource: any, headers: any, worksheet: any) {
    const dataset = datasource.forEach((element: any) => {
      let res: any = [];
      headers.forEach((header: any) => {
        res.push(element[header]);
      });
      let isBold = element?.bold;
      let row = worksheet.addRow(res);
      if (isBold) {
        row.font = { bold: true };
      }
      row.eachCell((cell: any, number: any) => {
        cell.border = {
          top: { style: 'thin' },
          left: { style: 'thin' },
          bottom: { style: 'thin' },
          right: { style: 'thin' },
        };
      });
    });
  }

  prepareDataset(dataSource: any[], headers: string[]): any[] {
    return dataSource.map((element: any) => {
      const res: any[] = [];
      headers.forEach((header: string) => {
        if (header === 'DATE') {
          res.push(
            element[header]
              ? formatDate(element[header], 'dd-MM-yyyy', 'en-US')
              : '-'
          );
        } else {
          res.push(element[header] !== null ? String(element[header]) : '-');
        }
      });
      return res;
    });
  }

  addTableData(dataset: any, worksheet: any) {
    dataset.forEach((data: any) => {
      const dataRow = worksheet.addRow(data);
      dataRow.eachCell((cell: any, number: any) => {
        cell.border = {
          top: { style: 'thin' },
          left: { style: 'thin' },
          bottom: { style: 'thin' },
          right: { style: 'thin' },
        };
      });
    });
  }

  addEmptyRow(NoOfRows: any, worksheet: any) {
    while (NoOfRows) {
      worksheet.addRow([]);
      NoOfRows = NoOfRows - 1;
    }
  }

  addFooterRow(mergeCellsUptoChar: string, worksheet: any) {
    const userDetails: any = localStorage.getItem('userData');
    const userData = JSON.parse(userDetails);

    const loggerUserid = userData?.appUserId;
    const loggerUsername = userData?.appUserName;

    const footerRow = worksheet.addRow([
      `Generated By : ${loggerUserid ? loggerUserid : ''}-${
        loggerUsername ? loggerUsername : ''
      },  Generated on : ${formatDate(
        new Date(),
        'dd-MM-yyyy HH:mm:ss a',
        'en-US',
        '+0530'
      )}`,
    ]);

    footerRow.getCell(1).fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'D4F1F4' },
    };
    footerRow.getCell(1).border = {
      top: { style: 'thin' },
      left: { style: 'thin' },
      bottom: { style: 'thin' },
      right: { style: 'thin' },
    };
    footerRow.getCell(1).alignment = {
      vertical: 'middle',
      horizontal: 'right',
    };
    // Merge Cells
    worksheet.mergeCells(
      `A${footerRow.number}:${mergeCellsUptoChar + footerRow.number}`
    );
  }
}
