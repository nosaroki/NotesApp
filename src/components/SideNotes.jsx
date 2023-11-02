import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function SideNotes() {
    const notes = useSelector(state => state.notes)
  return (
    <aside className='shrink-0 bg-orange-200/75 text-orange-700 w-[275px] flex flex-col items-center pt-2 border-r border-orange-300'>
        <p className='py-6 px-4 text-2xl font-semibold w-full text-center border-b border-orange-600'>Mes notes</p>
        <ul className='w-full divide-y divide-orange-600'>
            {notes.list && notes.list.map(note => (
                <li key={note.id}
                className='relative hover:bg-orange-100 cursor-pointer'>
                    <Link to={`/note/${note.id}`} className='p-4 w-full h-full block'>
                    <span className='block text-xl text-orange-700'>{note.title}</span>
                    <span className='block text-lg text-orange-500'>{note.subtitle}</span>
                    </Link>
                </li>
            ))}
        </ul>
    </aside>
  )
}
