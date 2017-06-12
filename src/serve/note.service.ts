import { Injectable } from '@angular/core';
import { NOTES,Governs } from './notes';
import { Note,Govern } from './note';
import {Location} from './local.serbice'
@Injectable()
export class NoteService{
	getNote(){
		if ( this.location.localStorage['notes']==undefined){
			console.log(this.location.localStorage);

			this.location.setJson(NOTES);	
		}
	};
	getNotes(): Promise<Note[]> {
	 this.getNote();
	 	// console.log(this.location);
	let note=this.location.getJson(NOTES);
		// console.log(note)
    return Promise.resolve(note);
  }
  //获取当前本地数据
  constructor(
        private location: Location
    ) {}
}
@Injectable()
export class NoteNumber{
	getGovern():Promise<Govern>{
		return Promise.resolve(Governs);

	}
	// NoteNumber:number;
	// up(index){
	// 	this.NoteNumber=index;
	// 	console.log(this.NoteNumber)
	// }
	// //获取一个id值s
	// constructor(){}
}
