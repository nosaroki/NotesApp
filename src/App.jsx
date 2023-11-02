import NotesList from "./components/NotesList"
import { useSelector, useDispatch } from "react-redux"
import { getNotesFromAPI } from "./features/notes"
import Sidebar from "./components/Sidebar"
import SideNotes from "./components/SideNotes"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import DisplayedNote from "./components/DisplayedNote"
import EditNote from "./components/EditNote"


function App() {
  const dispatch = useDispatch()
  const notes = useSelector (state => state.notes)
  if (!notes.list) {
    dispatch(getNotesFromAPI())
  }
  return (
  <div className="bg-orange-100/75 min-h-screen flex">
      <BrowserRouter>
        <Sidebar />
        <SideNotes />
        <Routes>
          <Route path="/" element={<NotesList />} />
          <Route path="/note/:id" element={<DisplayedNote />} />
          <Route path="/editer" element={<EditNote />} />
          <Route path="/editer/:id" element={<EditNote />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
