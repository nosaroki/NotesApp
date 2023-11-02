import React from 'react'
import edit from "../assets/edit.svg"
import folder from "../assets/folder.svg"
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <aside className='shrink-0 bg-orange-900 w-[100px] flex flex-col items-center pt-10'>
        <div className='flex justify-center mb-12'>
            <div className='w-4 h-4 rounded-full bg-red-500 mx-1'></div>
            <div className='w-4 h-4 rounded-full bg-yellow-400 mx-1'></div>
            <div className='w-4 h-4 rounded-full bg-green-500 mx-1'></div>
        </div>
            <Link to="/">
                <img src={folder} className='w-10 h-10 mb-10' alt="Voir l'ensemble des notes" />
            </Link>
            <Link to="/editer">
                <img src={edit} className='w-10 h-10 mb-10' alt="Écrire une nouvelle note" />
            </Link>
    </aside>
  )
}
