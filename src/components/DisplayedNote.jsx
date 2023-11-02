import React, { useLayoutEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useNavigate, useParams } from 'react-router-dom'
import { deleteNote } from '../features/notes'

export default function DisplayedNote() {
    const notes = useSelector(state => state.notes)
    const dispatch = useDispatch()
    const {id} = useParams()
    const navigate = useNavigate()
    console.log(useParams())
    const actualNote = notes.list?.find(note => note.id === id)

  return (
    <div className='p-8'>
        <Link to="/" className='px-2 py-1 text-orange-800 bg-orange-300 rounded mr-2'>Notes</Link>
        <Link to={`/editer/${id}`} className='px-2 py-1 text-orange-50 bg-teal-600 rounded mr-2'>Mettre à jour</Link>
        <button 
        onClick={() => {
            dispatch(deleteNote(id))
            navigate("/")
        }}
        className='px-2 p-1 text-orange-50 bg-red-500 rounded mr-2'>Supprimer</button>

        <p className='text-orange-700 text-4xl mt-8 mb-2 '>{actualNote?.title}</p>
        <p className='text-orange-600 text-xl mb-4'>{actualNote?.subtitle}</p>
        <p className='text-orange-800'>{actualNote?.bodyText}</p>
    </div>
  )
}
