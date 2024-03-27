import React from 'react'
import Task from './task'



const Tasks = ({array,onDelete,ontoggle}) => {
  return (
    <>
        {array.map((i)=>(
            <Task key={i.id} task={i} onDelete={onDelete} ontoggle={ontoggle}/>
        ))}
    </>
    )    
}

export default Tasks
