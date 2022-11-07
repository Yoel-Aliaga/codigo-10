import React, { useState } from 'react'

const App = () => {

  const [taskInput, setTaskInput] = useState("")
  const [taskList, setTaskList] = useState([])


  const handleChange = (event) => {
    console.log(event.target.value)
    setTaskInput (event.target.value)
  }


  const handleSubmit = (e) => {
    e.preventDefault()



    setTaskList(taskList.concat(taskInput))
    setTaskInput("")


    // setTaskList(taskInput + "uno")

    // setTaskInput=("")

    // alert(taskList)

  }





  return (
    <div>
      <form action="" onSubmit={handleSubmit}>

        <input type="text" onChange={handleChange} value={taskInput}/>
        <button>Envia</button>



      </form>

      <ul>
        {taskList.map(task => <li key={task}> {task} </li>)}
      </ul>

    </div>
  )
}

export default App