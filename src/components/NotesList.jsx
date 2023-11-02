import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function NotesList() {
    const notes = useSelector(state => state.notes)
  return (
    <div className='p-10 w-full'>
        <p className='text-xl text-orange-700 font-semibold mb-6'> Bienvenue sur Notes101</p>

        <ul className='grid lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 gap-6'>
            {notes.list && notes.list.map(note => (
                <li  key={note.id}
                className='bg-orange-200/75 hover:bg-orange-50 rounded cursor-pointer'>
                    <Link to={`/note/${note.id}`} className='p-4 w-full h-full block rounded'>
                    <p className='text-lg text-orange-700 font-semibold'>{note.title}</p>
                    <p className='text-orange-600/75'>{note.subtitle}</p>
                    </Link>
                </li>
            ))}
        </ul>
    </div>
  )
}
