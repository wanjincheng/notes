import { Note,Govern } from './note';
export const NOTES: Note[] = [
    { id: 11, title: 'Mr. Nice1',content:'第一份日记',time:'2017-05-26' },
    { id: 11, title: 'Mr. Nice2',content:'第二份日记',time:'2017-05-26' },
    { id: 11, title: 'Mr. Nice3',content:'第三份日记',time:'2017-05-26' }
];
export let Governs:Govern={
	state:false,
	num:null,
	NotesNumber:0
};
