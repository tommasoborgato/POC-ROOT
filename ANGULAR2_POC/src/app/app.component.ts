import { Component } from '@angular/core';
import './rxjs-operators';
import {PocService} from "./services/poc.service";
import {OutputObj} from "./model/output-obj";
import {InputObj} from "./model/input-obj";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title : string = 'POC works!';
  public isHiddenProgressBar : boolean = true;
  public errorMessageRest: string = '';
  public outputObj : OutputObj;
  public inputObj : InputObj = {"id":1,"content":"POC-GET","inputObjElems":[{"id":1,"content":"POC-1"},{"id":2,"content":"POC-2"}]};

  constructor(private pocService : PocService) {
  }

  clicked(event) {
    this.errorMessageRest = '';
    this.isHiddenProgressBar = false;
    this.pocService.getOutputOb(this.inputObj)
                                .subscribe(
                                  (outputObjFromServer) => {
                                    this.outputObj = outputObjFromServer;
                                    alert('this.outputObj.id :  ' + this.outputObj.id);
                                    this.isHiddenProgressBar = true;
                                  },
                                  (errorFromServer) =>  {
                                    this.errorMessageRest = <any>errorFromServer;
                                    this.isHiddenProgressBar = true;
                                  });
  }
}
