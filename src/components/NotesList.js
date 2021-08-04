import AddNote from './AddNote'
import Note from './Note'

const NotesList = ({ notes, handleAdd }) => {
    return (
        <div className="notes-list">
            {notes.map((note) => ( 
                <Note 
                    id={note.id} 
                    text={note.text} 
                    date={note.date}
                />
            ))}
            <AddNote handleAdd={handleAdd} />
        </div>
    )
}

export default NotesList