import { MdDeleteForever } from 'react-icons/md'

const Note = () => {
    return (
        <>
        <div className="note"></div>
        <span>Hello! This is our first note</span>
        <div className="note-footer">
            <small>15/06/1986</small>
            <MdDeleteForever className="delete-icon" size="1.3em" />
        </div>
        </>
    )
}

export default Note