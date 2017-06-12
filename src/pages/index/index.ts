import { Component, OnInit, DoCheck } from '@angular/core';
import { NoteService, NoteNumber } from '../../serve/note.service';
import { Note, Govern } from '../../serve/note';
import {Location} from '../../serve/local.serbice';
@Component({
    selector: 'index-component',
    templateUrl: './index.html',
    styleUrls: ['./index.css']
})
export class IndexComponent implements OnInit, DoCheck {
    Notes: Note[];
    NotesNumber: number;
    Govern: Govern;
    less;
    constructor(private noteService: NoteService, private noteNumber: NoteNumber,private ls:Location) {};
    getNotes(): void {
        this.noteService.getNotes().then(Notes => {
            this.Notes = Notes;
            this.Govern.NotesNumber = this.Notes.length;
            this.NotesNumber = this.Govern.NotesNumber;
        });
    };
    getGovern(): void {
            this.noteNumber.getGovern().then(Govern => { this.Govern = Govern; });
        }
        //获取到公共服务的数据
    ngOnInit(): void {
        this.getGovern();
        this.getNotes();
    }; //在组件加载是执行函数
    ngChange(index): void {
        this.Govern.num = index;
    };

    ngDoCheck() {
        if (this.Govern != undefined && this.Govern.NotesNumber == 0) {
            this.Govern.NotesNumber = 0;
            this.NotesNumber = this.Govern.NotesNumber;
        }
        this.Notes=this.ls.getJson('notes');
    };
    addNote(){
        this.Govern.state=true;
            };//添加日记
    ngDelete(index): void {
        this.Notes.splice(index, 1);
        this.ls.setJson(this.Notes);
        if (this.Notes.length == 0) {
            this.Govern.NotesNumber = 0;
            this.NotesNumber = this.Govern.NotesNumber;
        }
    }; //点击删除按钮删除日记文件
}
