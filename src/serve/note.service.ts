import { Injectable } from '@angular/core';
import { NOTES } from './notes';
import { Note } from './note';
@Injectable()
export class NoteService{
	getHeroes(): Promise<Note[]> {
    return Promise.resolve(NOTES);
  }
}