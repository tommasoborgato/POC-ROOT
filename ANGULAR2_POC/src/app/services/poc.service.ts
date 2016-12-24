import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import { InputObj } from 'app/model/input-obj';
import { InputObjElem } from 'app/model/input-obj-elem';
import { OutputObj } from '../model/output-obj';
import { OutputObjElem } from 'app/model/output-obj-elem';

@Injectable()
export class PocService {

  private pocUrl = 'http://localhost:8080/POC-WEB/rest/srv/obj';  // URL to web API


  constructor(private http: Http) { }

  getOutputObGet() : Observable<OutputObj> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.pocUrl,options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getOutputOb(inputObj : InputObj) : Observable<OutputObj> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.pocUrl,inputObj,options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    //return body.data || { };
    return body || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
