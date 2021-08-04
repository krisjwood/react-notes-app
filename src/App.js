import React from 'react'

import { useState } from "react"
import NotesList from "./components/NotesList"
import { nanoid } from 'nanoid'
import Search from "./components/Search"
import Header from './components/Header'

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "1st note",
      date: "15/06/1986"
    },
    {
      id: nanoid(),
      text: "2nd note",
      date: "25/07/1986"
    }
  ])
  const [searchText, setSearchText] = useState("")

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
  <Header />
  <Search handleSearch={setSearchText} />
  <div className="container">
    <NotesList 
      notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))} 
      handleAdd={AddNote} 
      deleteNote={deleteNote} />
  </div>
  </>
  )}

export default App
