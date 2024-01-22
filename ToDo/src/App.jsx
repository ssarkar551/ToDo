
import { useState } from 'react'
import './App.css'
import { CreateToDo } from './components/createToDo'
import { Todos } from './components/Todos';

function App() {
  const [todos, setTodos] = useState([]);

  fetch("http://localhost:3000/todos")
    .then(async(res)=>{
      const json = await res.json();
      setTodos(json.todos);
    })
  return (
    <div>
        <CreateToDo/>
        <Todos todos={todos}/>
    </div>
  )
}

export default App
