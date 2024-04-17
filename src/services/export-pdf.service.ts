import { Injectable } from '@angular/core';
import * as logoFile from '../assets/img/logoBase64';
import 'jspdf-autotable';

@Injectable({
  providedIn: 'root',
})
export class ExportPdfService {
  async exportToPDF(
    data: any[],
    fileName: string,
    columnsToExport: string[],
    params: { key: string; value: any }[],
    data2?: any[],
    columnsToExport2?: string[]
  ): Promise<void> {
    const jsPDF = await import('jspdf');
    const doc = new jsPDF.default();

    // Add logo
    this.addLogoToPDF(doc);

    // Add report name and parameters
    this.addReportNameAndParametersToPDF(doc, fileName, params);
    doc.text('', 10, 100);

    const table1StartY = 80;
    this.addTableToPDF(doc, data, columnsToExport, table1StartY);

    if (data2 && columnsToExport2) {
      const table2StartY = table1StartY + 20;
      doc.text('', 10, table2StartY);
      this.addTableToPDF(doc, data2, columnsToExport2, table2StartY);
    }

    // Save PDF
    doc.save(fileName + '.pdf');
  }

  addLogoToPDF(doc: any) {
    const logoImg = new Image();
    logoImg.src = logoFile.base64StringUrl;
    doc.addImage(logoImg, 'PNG', 10, 10, 35, 30);
  }

  addReportNameAndParametersToPDF(
    doc: any,
    fileName: string,
    params: { key: string; value: any }[]
  ) {
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 255);
    doc.text(`${fileName}`, 190, 20, 'right');
    doc.setTextColor(0, 0, 0);
    params.forEach((param: any, index: number) => {
      doc.text(
        `${param.key.toUpperCase()}: ${param.value}`,
        190,
        30 + index * 10,
        'right'
      );
    });
  }

  addTableToPDF(
    doc: any,
    data: any[],
    columnsToExport: string[],
    startY: number
  ) {
    const tableData = data.map((row) => columnsToExport.map((col) => row[col]));

    doc.autoTable({
      startY,
      head: [columnsToExport.map((col) => ({ content: col }))],
      body: tableData,
      didDrawCell: (data: any) => {
        // Add borders
        doc.rect(
          data.cell.x,
          data.cell.y,
          data.cell.width,
          data.cell.height,
          'S'
        );
      },
    });
  }
}
