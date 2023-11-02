import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { nanoid } from 'nanoid'
import { addNoteFromUser, editNote } from '../features/notes'
import { useParams } from 'react-router-dom'

export default function EditNote() {
    const dispatch = useDispatch()
    const notes = useSelector(state => state. notes)

    const [inputsStates, setInputsStates] = useState({ // prend en compte toutes les données des inputs
        title: "",
        subtitle: "",
        bodyText: ""
    })

    const [showValidation, setShowValidation] = useState({ // prend en compte toutes les données des inputs
        title: false,
        subtitle: false,
        bodyText: false
    })

    const {id} = useParams()

    useEffect(()  => {
        if(id && notes.list) {
            setInputsStates({
                title: notes.list.find(note => note.id === id).title,
                subtitle: notes.list.find(note => note.id === id).subtitle,
                bodyText: notes.list.find(note => note.id === id).bodyText,
            })
        }
        else{
            setInputsStates({
                title: "",
                subtitle: "",
                bodyText: ""
            })
        }
    }, [id])

    function handleSubmit(e) {
        e.preventDefault()

        if(Object.values(inputsStates).every(value => value)) {
            setShowValidation({
                title: false,
                subtitle: false,
                bodyText: false
            })
            if(id && notes.list) {
                dispatch(editNote({...inputsStates, id}))
            }
            else{
                dispatch(addNoteFromUser({...inputsStates, id: nanoid(8) }))
                setInputsStates({
                    title: "",
                    subtitle: "",
                    bodyText: ""
                })
            }
        }
        else{
            for(const [key, value] of Object.entries(inputsStates))  {
                if(value.length === 0) {
                    setShowValidation(state => ({...state, [key]: true}))
                }
                else{
                    setShowValidation(state => ({...state, [key]: false}))
                }
            }
        }
        // console.log(Object.entries(inputsStates))
    }
  return (
    <div className='w-full p-10'>
        <p className='text-orange-700 text-xl mb-4'>Ajouter une note</p>
        <form onSubmit={handleSubmit}>
            <label 
            htmlFor="title" 
            className='mb-2 block text-orange-700'>Titre
            </label>
            <input 
            onChange={e => setInputsStates({...inputsStates, title: e.target.value})}
            type="text" 
            value={inputsStates.title} 
            id='title'
            spellCheck="false"
            className='p-2 text-md w-full rounded bg-orange-200/75'/>
            {showValidation.title && (
                <p className='text-red-500 mb-3'>Oups, il manque un titre !</p>
            )}
            <label 
            htmlFor="subtitle" 
            className='mb-2 mt-4 block text-orange-700'>Sous-titre
            </label>
            <input 
            onChange={e => setInputsStates({...inputsStates, subtitle: e.target.value})}
            type="text" 
            value={inputsStates.subtitle} 
            id='subtitle'
            spellCheck="false"
            className='p-2 text-md w-full rounded bg-orange-200/75'/>
            {showValidation.subtitle && (
                <p className='text-red-500 mb-3'>Oups, il manque un sous-titre !</p>
            )}
            <label 
            htmlFor="bodyText" 
            className='mb-2 mt-4 block text-orange-700'>Contenu de la note
            </label>
            <textarea 
            onChange={e => setInputsStates({...inputsStates, bodyText: e.target.value})}
            id="bodyText"
            spellCheck="false"
            value={inputsStates.bodyText}
            className='p-2 text-md w-full min-h-[300px] rounded bg-orange-200/75'>
            </textarea>
            {showValidation.bodyText && (
                <p className='text-red-500 mb-3'>Oups, il manque une description !</p>
            )}

            <button className='mt-4 px-3 py-1 bg-orange-600 text-orange-100 rounded'>Enregistrer</button>
        </form>
    </div>
  )
}
