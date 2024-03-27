import { useState,useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/header'
import Tasks from './components/tasks'
import Addtask from './components/addtask'
import Footerr from './Footer'
import About from './components/about'



function App() {
  const [showform,setShowform] = useState(false)
  const [tasks,setTasks] = useState([]);

useEffect(()=>{
  const getTasks = async () => {
    const tasksFromServer = await fetchTasks()
    setTasks(tasksFromServer)
  }
  getTasks()
},[])

const fetchTasks = async() =>{
  const res = await fetch('http://localhost:5000/tasks')
  const data = await res.json()
  return data
}


const fetchTask = async(id) =>{
  const res = await fetch(`http://localhost:5000/tasks/${id}`)
  const data = await res.json()
  return data
}

const deleteTask = async(id) => {
  await fetch(`http://localhost:5000/tasks/${id}`,{
    method:'DELETE'
  })

  setTasks(tasks.filter((task) => task.id !== id ))
  // console.log(id)
};

const toggleRemainder = async(id) => {
  const taskToToggle = await fetchTask(id)
  const updTask = {...taskToToggle, remainder: !taskToToggle.remainder}

  const res = await fetch(`http://localhost:5000/tasks/${id}`,{
    method :'PUT',
    header : {
      'Content-type' : 'application/json'
    },
    body : JSON.stringify(updTask)
  })

    const data = await res.json()


  setTasks(tasks.map((i)=>
  i.id === id ? {...i, remainder:data.remainder} : i
  ))
}

const addTask = async(task) => {
  const res = await fetch('http://localhost:5000/tasks',{
    method : 'POST',
    header : {
      'content-type' : 'application/json',
    },
    body : JSON.stringify(task)
  })
  const data = await res.json()

  setTasks([data,...tasks])


  // const id = Math.floor(Math.random()*10000 + 1)
  // const newTask = {id , ...task}
  // setTasks([newTask, ...tasks])
}

  return (
    <Router>
    <div className="container">
      <Header press={()=>setShowform(!showform)} openClose={showform} />
      <Routes>
      <Route 
      path='/' 
      exact 
      element = {
        <>
           {showform && <Addtask onAdd={addTask}/>}
           {tasks.length>0 ? <Tasks array={tasks} onDelete= {deleteTask} ontoggle={toggleRemainder}/> : ("Em Lev ✋ Petko Edhoti!!")}
        </>
      } />
      <Route path='/about' Component={About} />
      </Routes>
      <Footerr/>
    </div>
    </Router>
  );
}


export default App
