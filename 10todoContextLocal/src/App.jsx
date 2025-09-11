import { useEffect, useId, useState } from 'react'
import './App.css'
import {TodoContextProvider} from "./Context/Index"
import FormUI from './Components/FormUI'
import TodoItem from './Components/ToDoitem'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo=(todo)=>{
    setTodos((prevValue)=> [{id:Date.now(),...todo},...prevValue])
  }

  const deleteTodo=(id)=>{
    setTodos((prevTodo)=> prevTodo.filter((r) => r.id!==id))    
  }

    const updateTodo=(id,todo)=>{
    setTodos((prevValue)=>  prevValue.map((r) => r.id===id ? todo:r ));
  }

    const toggleComplete=(id)=>{
    setTodos((prevValue)=>  prevValue.map((r) => r.id===id ? {...r,completed:!r.completed}:r) );
  }

  useEffect(()=>{
  const todos=JSON.parse(localStorage.getItem("getTodos"));
  if (todos && todos.length){
    setTodos(todos);
  } 
  },[])

  useEffect(()=>{
    localStorage.setItem("getTodos",JSON.stringify(todos))
  },[todos])

  return (
    <TodoContextProvider value={{todos,addTodo,deleteTodo,updateTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <FormUI/>
                    </div>
                    <div className="flex flex-wrap gap-y-3" >
                        {todos.map((todo)=> (
                          <div key={todo.id} style={{minWidth:"100%"}}>
                              <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoContextProvider>
  )
}

export default App
