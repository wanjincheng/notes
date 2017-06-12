import { Component } from '@angular/core';
import { IndexComponent } from '../pages/index/index';
import { InputComponent } from '../pages/input/input';
import { NoteService,NoteNumber } from '../serve/note.service';
import {Location} from '../serve/local.serbice';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NoteService,NoteNumber,Location]
})
export class AppComponent {
  // title = 'app works!';
  constructor(private noteService: NoteService) {}; 
}
