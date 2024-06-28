"use client"

import { useState, SyntheticEvent } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Import the uuidv4 function
import Todo from './_components/Todo';

export type TodoType = {
    id: string
    label: string
}

export default function Todos() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<TodoType[]>([]);
  console.log(todos)

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (todo) {       
      setTodos([...todos, { id: uuidv4(), label: todo }]);
      setTodo("");
    }
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <h1 className='text-2xl mb-4'>Todos</h1>
      <form onSubmit={handleSubmit}>
        <input 
            type='text' 
            value={todo} 
            className='border-2'
            onChange={e => setTodo(e.target.value)} />
        <button type='submit'>Add todo</button>
      </form>
      {todos.map((todo) => (
        <div key={todo.id}>
          <Todo todo={todo} onDelete={deleteTodo} />
        </div>
      ))}
    </div>
  );
}
