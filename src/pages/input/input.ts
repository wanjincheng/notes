import { Component, OnInit, DoCheck } from '@angular/core';
import { NoteService, NoteNumber } from '../../serve/note.service';
import { Note, Govern } from '../../serve/note';
import { Location } from '../../serve/local.serbice';
@Component({
    selector: 'input-component',
    templateUrl: './input.html',
    styleUrls: ['./input.css']
})
export class InputComponent implements OnInit, DoCheck {
    Notes;
    Boolean: boolean;
    // 删除提现操作
    Govern: Govern;
    //获取控制开关
    Cut: boolean;
    // 状态值
    Note: Note[];
    //数据
    CNote: Note = {
        title: '',
        content: '',
        time: ''
    };
    //添加数据
    Date: string;
    //记录时间
    constructor(private noteService: NoteService, private noteNumber: NoteNumber, private ls: Location) {};

    getNotes(): void {
        this.noteService.getNotes().then(Notes => { this.Notes = Notes; }); //console.log(this.Notes[1])    
    };
    getGovern(): void {
            this.noteNumber.getGovern().then(Govern => { this.Govern = Govern; });
        }
        //获取到公共服务的数据
    ngDoCheck() {
            if (this.Govern != undefined && this.Govern.num != null) {
                this.Note = this.Notes[this.Govern.num];
            }
            if (this.Govern != undefined && this.Govern.state != false) {
                this.Cut = this.Govern.state;

            }
        }
        //监听数据变化
    ICCOCall() {
        this.Govern.num = null;
        this.Note = null;
    };
    //取消操作
    ICCOUp() {
            this.ls.setJson(this.Notes);
            alert('保存成功');
            this.Govern.num = null;
            this.Note = null;
        }
        //保存操作
        //修改数据
    iDelete() {
        this.Boolean = true;
    }
    iDeleteN() {
        this.Boolean = false;
    };
    iDeleteY() {
        this.Notes.splice(this.Govern.num, 1);
        this.ls.setJson(this.Notes);
        if (this.Notes.length == 0) {
            this.Govern.NotesNumber = 0;
        }
        this.Boolean = false;
        this.Govern.num = null;
        this.Note = null;
    };
    // 删除某个数据
    cancel() {
        this.Govern.state = false;
        this.Cut = this.Govern.state;
        this.CNote={title: '',
        content: '',
        time: ''};
        this.Govern.num = null;
        this.Note = null;
    };
    // 取消新增日记操作
    save() {
        if (this.CNote.title != '') {
            let Dates = new Date();
            let Year = Dates.getFullYear();
            let Month = Dates.getMonth() + 1;
            let date = Dates.getDate();
            this.Date = Year + '-' + Month + '-' + date;
            // 获取时间
            this.CNote.time = this.Date;
            this.Notes.push(this.CNote);
            this.ls.setJson(this.Notes);
            alert('日记保存成功');
            this.Govern.state = false;
            this.Cut = this.Govern.state;
            this.CNote={title: '',
        content: '',
        time: ''};
        } else if (this.CNote.title == '') {
            alert('日记不能为空')
        }
    };
    // 保存新增数据
    ngOnInit(): void {
        this.getNotes();
        this.getGovern();
    };
}
