import { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  return (
    <>
      <div className="" style={{textAlign: "center", marginTop: "50px"}}>
        <h1>To Do List</h1>
        <input type='text' value={input} onChange={(e) => setInput(e.target.value)} placeholder='Enter a task'>
        </input>
        <button>Add</button>
      </div>

    </>
  )
}

export default App
