import addNoteHandler from './addNote.handler';
import updateNoteHandler from './updateNote.handler';
import deleteNoteHandler from './deleteNote.handler';
import allNotesHandler from './allNotes.handler';


const handlers = {
    addNote: addNoteHandler,
    updateNote: allNotesHandler,
    deleteNote: deleteNoteHandler,
    allNotes: allNotesHandler
}

export default handlers;