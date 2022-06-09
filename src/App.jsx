import { useState } from 'react'
import { GiHornedHelm } from 'react-icons/gi'
import { AiOutlinePlus, AiOutLineCLose } from 'react-icons/ai'

function App() {

    const [tasks, setTasks] = useState([''])
    const [input, setInput] = useState('')

    const handleSubmit = (e) =>{
      e.preventDefault()
      const addTask = {
        id: Math.floor(Math.random() * 1000),
        text: input,
        completed: false
      }
      setTasks([...tasks, addTask]) 
      setInput('')
    }

    return (
      <div>
        <div>
          <h1><GiHornedHelm/>PowerList</h1>

          <form onClick={handleSubmit}>
            <AiOutlinePlus/>
            <input value={input} type="text" placeholder='Enter a task' onChange={e => setInput(e.target.value)}/>
          </form>

          {
            tasks.map(task => (
              <div key={task.id}>
                <p>{task.text}</p>
              </div>
            ))}
        </div>
      </div>
    );
  }

export default App;
