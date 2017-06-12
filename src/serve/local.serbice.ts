import {NOTES} from './notes';
export class Location{
localStorage:any;
key='notes';

setJson(value:any):void{
let key=this.key;
this.localStorage[key]=JSON.stringify(value);
};
getJson(value:any):any{
	let key=this.key;
	return JSON.parse(this.localStorage[key] || '{}')
}


	constructor() {
        if (!localStorage) {
            throw new Error('Current browser does not support Local Storage');
        }
        this.localStorage = localStorage;
    }
}