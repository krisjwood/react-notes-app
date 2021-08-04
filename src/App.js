import React from 'react'

import { useState, useEffect } from "react"
import NotesList from "./components/NotesList"
import { nanoid } from 'nanoid'
import Search from "./components/Search"
import Header from './components/Header'

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "First note example",
      date: "1/08/2021"
    },
    {
      id: nanoid(),
      text: "Second note example",
      date: "1/09/2020"
    }
  ])
  const [searchText, setSearchText] = useState("")

  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem('react-notes-app-data')
    )

    if(savedNotes) {
      setNotes(savedNotes)
    }
  }, [])

  // Saves notes to local storage whenever notes change
  useEffect(() => {
    localStorage.setItem(
      'react-notes-app-data', 
      JSON.stringify(notes)
    )
  }, [notes])

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
   <div className={`${darkMode && 'dark-mode'}`}>
      <Header handleToggleDarkMode={setDarkMode} />
      <Search handleSearch={setSearchText} />
      <div className="container">
        <NotesList 
          notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))} 
          handleAdd={AddNote} 
          deleteNote={deleteNote} />
      </div>
  </div>
  </>
  )}

export default App
