import React from 'react'

import AddNote from './AddNote'
import Note from './Note'

const NotesList = ({ notes, handleAdd, deleteNote }) => {
    return (
        <div className="notes-list">
            {notes.map((note) => ( 
                <Note 
                    id={note.id} 
                    text={note.text} 
                    date={note.date}
                    deleteNote={deleteNote} 
                />
            ))}
            <AddNote 
                handleAdd={handleAdd} 
            />
        </div>
    )
}

export default NotesList