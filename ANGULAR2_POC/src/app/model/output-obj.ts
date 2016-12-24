import {OutputObjElem} from "./output-obj-elem";
export interface OutputObj {
  id : number;
  content : string;
  outputObjElems : Array<OutputObjElem>;
}
