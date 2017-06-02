import { Component,OnInit,DoCheck } from '@angular/core';
import { NoteService,NoteNumber } from '../../serve/note.service';
import { Note } from '../../serve/note';
@Component({
  selector: 'input-component',
  templateUrl: './input.html',
  styleUrls: ['./input.css'],
  providers: [NoteService,NoteNumber]
})
export class InputComponent implements OnInit,DoCheck {
	Notes;
	changess=this.noteNumber.NoteNumber;
	Note:Note[];
	constructor(private noteService: NoteService,private noteNumber: NoteNumber) {}; 

	getNotes(): void {
    	this.noteService.getNotes().then(Notes => {this.Notes = Notes;});//console.log(this.Notes[1])
    this.changess=this.noteNumber.NoteNumber;
    console.log(this.noteNumber.NoteNumber);
    // console.log(this.noteNumber.NoteNumber);
    // if(this.noteNumber.NoteNumber){
    // 	console.log(Note)
    // 	this.noteService.getNotes().then(Notes => {this.Notes[this.noteNumber.NoteNumber] = Note;});
    // }
  };
  //获取到公共服务的数据
 ngDoCheck() {
 this.changess;
 	// this.noteService.getNotes().then(Notes => {this.Notes = Notes;});
  console.log(this.changess)
}
  ngOnInit(): void {
    this.getNotes();
  };
}