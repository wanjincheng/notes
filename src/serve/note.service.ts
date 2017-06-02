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
	//获取一个id值
	NoteBoolean:boolean=false;
	//设置笔记本显示是默认还是历史数据
}