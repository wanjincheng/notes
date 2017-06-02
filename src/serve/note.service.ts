import { Injectable } from '@angular/core';
import { NOTES } from './notes';
import { Note } from './note';
@Injectable()
export class NoteService{
	getNotes(): Promise<Note[]> {
    return Promise.resolve(NOTES);
  }
}
@Injectable()
export class NoteNumber{
	
	NoteNumber:number;
	up(index){
		this.NoteNumber=index;
		console.log(this.NoteNumber)
	}
	//获取一个id值s
	constructor(){}
}
export class NoteBoolean{NoteBoolean:boolean=false;}
	//设置日记本显示是默认还是历史数据