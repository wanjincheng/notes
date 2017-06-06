import { Component, OnInit } from '@angular/core';
import { NoteService, NoteNumber } from '../../serve/note.service';
import { Note,Govern } from '../../serve/note';
@Component({
    selector: 'index-component',
    templateUrl: './index.html',
    styleUrls: ['./index.css']
})
export class IndexComponent implements OnInit {
    Notes: Note[];
    Govern:Govern;
    less;
    constructor(private noteService: NoteService, private noteNumber: NoteNumber) {};
    getNotes(): void {
        this.noteService.getNotes().then(Notes => { this.Notes = Notes; });
    };
    getGovern():void{
        this.noteNumber.getGovern().then(Govern=>{this.Govern=Govern;});

    }
    //获取到公共服务的数据
    ngOnInit(): void {
        this.getNotes();
        this.getGovern();

    }; //在组件加载是执行函数
    ngChange(index): void {
         this.Govern.num=index;
    	// this.noteBoolean.NoteBoolean=false;
    };


    ngDelete(index): void {
       
        // this.noteNumber.NoteNumber=1;
        this.Notes.splice(index, 1);
        // console.log(this.noteNumber.NoteNumber);
    }; //点击删除按钮删除日记文件
}
