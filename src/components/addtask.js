import React from 'react'
import { useState } from 'react'

const Addtask = ({onAdd}) => {
    const [text,setText] = useState('')
    const [day,setDay] = useState('')
    const [remainder,setRemainder] = useState(false)

const submt = (e) => {
    e.preventDefault()

    if (!text || !day)  {
        alert("Khaliee form submit kaadh ra 🤦🏻‍♂, Edhoti pettu angla 😡!!")
        return
    }

    onAdd({text,day,remainder})
    setDay("")
    setText("")
    setRemainder(false)
}

  return (
    <form className='add-form' onSubmit={submt}>
      <div className='form-control'>
        <label>Task</label>
        <input type='Text' placeholder='Add Task' value={text} 
        onChange={(e) => setText(e.target.value)} />
      </div>
      <div className='form-control'>
        <label>Day and Time</label>
        <input type='Text' placeholder='Day and Time' value={day} 
        onChange={(e) => setDay(e.target.value)}/>
      </div>
      <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        <input type='checkbox' value={remainder} 
        checked={remainder}
        onChange={(e) => setRemainder(e.currentTarget.checked)} />
      </div>
      <input type='submit' value='Save Task' className="btn btn-block" />
    </form>
  )
}

export default Addtask
