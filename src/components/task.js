import {FaTimes} from 'react-icons/fa'
const Task = ({task, onDelete,ontoggle}) => {
  return (
    <div className= {`task ${task.remainder ? 'reminder' : ''}`}  onDoubleClick={()=>ontoggle(task.id)}>
      <h3>{task.text} <FaTimes 
      style={{color:'red', cursor:'pointer'}}
      onClick={()=>onDelete(task.id)}/></h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task
