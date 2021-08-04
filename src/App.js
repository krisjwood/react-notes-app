import { useState } from "react"
import NotesList from "./components/NotesList"
import { nanoid } from 'nanoid'
import Search from "./components/Search"

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

  const deleteNote = (id) => {
    const newNotes = notes.filter(note => note.id !== id)
    setNotes(newNotes)
  }

  return (
  <>
  <Search />
  <div className="container">
    <NotesList notes={notes} handleAdd={AddNote} deleteNote={deleteNote} />
  </div>
  </>
  )}

export default App
