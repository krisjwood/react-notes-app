import { useState } from "react"

const AddNote = ({ handleAdd }) => {
    const [noteText, setNoteText] = useState('')
    const textLimit = 200

    function handleChange(e) {
        if (textLimit - noteText.length >= 0) {
            setNoteText(e.target.value)
        }
    }

    function handleSave() {
        if (noteText.trim().length > 0) {
            handleAdd(noteText)
        } else {
            alert("No text detected")
        }
        
        setNoteText("")
    }

    return (
        <div className="note new">
            <textarea 
                rows="8" 
                cols="10" 
                placeholder="Type your note here..."
                value={noteText}
                onChange={handleChange}
            ></textarea>
            <div className="note-footer">
                <small>{textLimit - noteText.length} characters remaining</small>
                <button className="save" onClick={handleSave}>Post it</button>
            </div>
        </div>
    )
}

export default AddNote