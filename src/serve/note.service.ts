import { Injectable } from '@angular/core';
import { NOTES,Governs } from './notes';
import { Note,Govern } from './note';
@Injectable()
export class NoteService{
	getNotes(): Promise<Note[]> {
    return Promise.resolve(NOTES);
  }
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
