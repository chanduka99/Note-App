import express from 'express';
import handlers from '../controllers/export.handlers';


const router = express.Router();


//get all notes
router.get('/all-notes', handlers.allNotes);

//add new note
router.post('/add-note', handlers.addNote);

//update note
router.put('/update-note', handlers.updateNote);

//delte note
router.delete('/delte-note', handlers.deleteNote);


export default router;