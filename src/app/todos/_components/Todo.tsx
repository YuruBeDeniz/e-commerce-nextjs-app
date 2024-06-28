import React from 'react'
import { TodoType } from '../page'

type TodoProps = {
    todo: TodoType
    onDelete: (id: string) => void
}

export default function Todo({ todo, onDelete }: TodoProps) {

  return (
    <div className='flex justify-between max-w-xs'>
     <h1>{todo.label}</h1>
     <button onClick={() => onDelete(todo.id)}>x</button> 
    </div>
  )
}
