import { useState } from "react"
import NotesList from "./components/NotesList"
import { nanoid } from 'nanoid'

const App = () => {
  const [notes, setNotes] = useState([])

  const AddNote = (text) => {
    const date = new Date()
    const newNote = {
      id: nanoid(),
      text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }

  return <div className="container">
    <NotesList notes={notes} handleAdd={AddNote} />
  </div>
}

export default App
