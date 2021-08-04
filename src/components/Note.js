import { MdDeleteForever } from 'react-icons/md'

const Note = ({ id, text, date, deleteNote }) => {

    return (
        <>
        <div className="note">
        <span>{text}</span>
        <div className="note-footer">
            <small>{date}</small>
            <MdDeleteForever 
                onClick={() => deleteNote(id)} 
                className="delete-icon" 
                size="2em" 
            />
        </div>
        </div>
        </>
    )
}

export default Note