import './App.css';
import React, { useState } from 'react';

function App() {

  const [tasks, setTasks] = useState([
    { name : "Walk Papi" , priority : true },
    { name : "Cook tomorrow's lunch" , priority : false },
    { name : "Eat, Sleep, React , Repeat" , priority : true }

  ]);
  const handleChange = event => {
    const target = event.target
    const name = target.name
    const value = target.value
    setTasks({
      ...tasks,
      [name] : value
    })
   
  }

  const [newTask, setNewTask] = useState('')


  const handleTaskInput = (event) => {
    setNewTask(event.target.value);
  }

  const createNewTask = (event) => {
    event.preventDefault();
    const copyTasks = [...tasks]
    copyTasks.push({name : newTask, priority : true});
    setTasks(copyTasks)
    setNewTask('');
  }

  const doTask = (index) => {
    const copyTasks = [...tasks];
    copyTasks[index].priority = false;
    setTasks(copyTasks);
  }

  const tasksNodes = tasks.map( (tasks, index) => {
    return (
      <li key={index} className={tasks.priority ? 'high-priority' : 'low-priority'}> <span>{tasks.name}</span>
      {tasks.priority ? <span className='high-priority'>High Priority </span> : 
      <button onClick={ () => doTask(index)}> Low Priority </button> }

      </li>

    )
  })

  return (
    <div className="App">
      <h1> ToDo's</h1>
      <hr></hr>

      <ul>
        {tasksNodes}
      </ul>

      <form onSubmit={createNewTask}>
        <label htmlFor='new-task'> Save New Task:</label>
        <input id='new-task' type='text' value={newTask} onChange={handleTaskInput}/>

        <div className='radio-btn'>

        <lable>High : </lable>
        <input type='radio' name="priority" value="high"
        onChange={handleChange} checked={tasks.name=="Walk Papi"}/>
        <lable>Low : </lable>
        <input type='radio' name="priority" value="low"
        onChange={handleChange} checked={tasks.name=="Cook Dinner"}/>
      
      </div>
      </form>


    </div>

  );
}

export default App;
