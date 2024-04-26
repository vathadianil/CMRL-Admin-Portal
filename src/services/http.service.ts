import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { HeaderInterface, ParamsInterface } from '../models/http-header.model';
import { LoaderService } from './loader.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private _baseUrl: string = environment.base_url;
  private _headers = new HttpHeaders();
  private _params = new HttpParams();

  private httpOptions: any = {};

  constructor(
    private _httpClient: HttpClient,
    private _loaderService: LoaderService
  ) {}

  /**
   * Function to Add Custom Headers and return it
   * @param headerArr Array<Object>
   * @return headers Object
   */
  setAdditionalHeaders(headerArr?: Array<HeaderInterface>) {
    if (headerArr) {
      headerArr.forEach((headerObj) => {
        let key = headerObj['key'];
        let value = headerObj['value'];
        this._headers = this._headers.set(key, value);
      });
    }
  }

  /**
   * Function to Add Custom Headers and return it
   * @param paramsArr Array<Object>
   * @return params
   */
  generateParams(paramsArr: ParamsInterface[]) {
    this._params = new HttpParams();
    paramsArr.forEach((paramObj) => {
      let key = paramObj['key'];
      let value = paramObj['value'];
      let param: any = {};
      param[key] = value;
      this._params = this._params.appendAll(param);
    });
  }

  /**
   * Method to call get request api
   * @param url url of the api
   * @param paramsArr Array of parameters need to call the api
   * @param headerArr additional header array
   * @param loader whether to show loader or not
   * @param isFile whether requesting for a file
   */
  getRequest(
    url: string,
    paramsArr?: ParamsInterface[],
    headerArr?: Array<HeaderInterface>,
    loader = true,
    isFile?: boolean
  ): Observable<any> {
    this._params = new HttpParams();
    this.setAdditionalHeaders(headerArr);
    if (paramsArr) {
      this.generateParams(paramsArr);
    }
    this.httpOptions = {
      headers: this._headers,
      params: this._params!,
    };
    if (isFile) {
      this.httpOptions['responseType'] = 'blob';
    }
    if (loader) {
      this._loaderService.show();
    }

    return this._httpClient
      .get(`${this._baseUrl}${url}`, this.httpOptions)
      .pipe(
        tap({
          next: (event) => {
            if (loader) this._loaderService?.hide();
          },
          error: (err) => {
            if (loader) this._loaderService?.hide();
          },
        })
      );
  }

  /**
   * Method to call the post request api
   * @param url url of the api
   * @param body request body
   * @param params parameter need to call api
   * @param headerArr additional header need to call api
   */
  postRequest(
    url: string,
    body?: any,
    params?: HttpParams,
    headerArr?: Array<HeaderInterface>,
    loader = true,
    isFile?: boolean,
    setResponseText?: boolean
  ): Observable<any> {
    this._params = new HttpParams();
    this.setAdditionalHeaders(headerArr);
    this.httpOptions = {
      headers: this._headers,
      params: this._params!,
    };
    if (setResponseText) {
      let response = { observe: 'response', responseType: 'text' };
      this.httpOptions = { ...this.httpOptions, ...response };
    }
    if (loader) {
      this._loaderService.show();
    }
    return this._httpClient
      .post(`${this._baseUrl}${url}`, body, this.httpOptions)
      .pipe(
        tap({
          next: (event) => {
            if (loader) this._loaderService?.hide();
          },
          error: (err) => {
            if (loader) this._loaderService?.hide();
          },
        })
      );
  }

  /**
   * Method to call get request api
   * @param url url of the api
   * @param params parameter need to call the api
   * @param headerArr additional header arrray
   */
  deleteRequest(
    url: string,
    params?: HttpParams,
    headerArr?: Array<HeaderInterface>,
    loader = true
  ): Observable<any> {
    this._params = new HttpParams();
    this.setAdditionalHeaders(headerArr);
    this.httpOptions = {
      headers: this._headers,
      params: params!,
    };
    if (loader) {
      this._loaderService.show();
    }
    return this._httpClient
      .delete(`${this._baseUrl}${url}`, this.httpOptions)
      .pipe(
        tap({
          next: (event) => {
            if (loader) this._loaderService?.hide();
          },
          error: (err) => {
            if (loader) this._loaderService?.hide();
          },
        })
      );
  }

  /**
   * Method to call the post request api
   * @param url url of the api
   * @param body request body
   * @param params parameter need to call api
   * @param headerArr additional header need to call api
   */
  putRequest(
    url: string,
    body: Object,
    params?: HttpParams,
    headerArr?: Array<HeaderInterface>,
    loader = true
  ): Observable<any> {
    this._params = new HttpParams();
    this.setAdditionalHeaders(headerArr);
    this.httpOptions = {
      headers: this._headers,
      params: params!,
    };
    if (loader) {
      this._loaderService.show();
    }
    return this._httpClient
      .put(`${this._baseUrl}${url}`, body, this.httpOptions)
      .pipe(
        tap({
          next: (event) => {
            if (loader) this._loaderService?.hide();
          },
          error: (err) => {
            if (loader) this._loaderService?.hide();
          },
        })
      );
  }
}
