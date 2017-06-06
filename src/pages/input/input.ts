import { Component, OnInit, DoCheck } from '@angular/core';
import { NoteService, NoteNumber } from '../../serve/note.service';
import { Note, Govern } from '../../serve/note';
@Component({
    selector: 'input-component',
    templateUrl: './input.html',
    styleUrls: ['./input.css']
})
export class InputComponent implements OnInit, DoCheck {
    Notes;
    Govern: Govern;
    // 状态值
    Note: Note[];
    //数据
    constructor(private noteService: NoteService, private noteNumber: NoteNumber) {};

    getNotes(): void {
        this.noteService.getNotes().then(Notes => { this.Notes = Notes; }); //console.log(this.Notes[1])    
    };
    getGovern(): void {
            this.noteNumber.getGovern().then(Govern => { this.Govern = Govern; });
        }
        //获取到公共服务的数据
    ngDoCheck() {
        console.log(this.Govern)
        if(this.Govern!=undefined && this.Govern.num!=null){
          this.Note=this.Notes[this.Govern.num];
          console.log(this.Note)
        }
    }

    ngOnInit(): void {
        this.getNotes();
        this.getGovern();
    };
}
