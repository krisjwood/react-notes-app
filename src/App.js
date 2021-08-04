import { useState } from "react"
import NotesList from "./components/NotesList"
import { nanoid } from 'nanoid'

const App = () => {
  const [notes, setNotes] = useState([
    {
    id: nanoid(),
    text: "This is some text",
    date: "15/06/1986"
  },
  {
    id: nanoid(),
    text: "This is some blurb",
    date: "16/06/1986"
  },
  {
    id: nanoid(),
    text: "This is some rubbish",
    date: "17/06/1986"
  }])

  return <div className="container">
    <NotesList notes={notes} />
  </div>
}

export default App
