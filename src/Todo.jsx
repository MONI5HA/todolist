import React, { useState } from 'react'
import './todo.css'
function Todo() {
    const [todo,setTodo]=useState([])
    const[input,setInput]=useState('');
    const[eindex,setIndex]=useState(null);
    function handlechange(e){
        setInput(e.target.value);
        

    }
    
    function handelsubmit(e){
        e.preventDefault()
        if(eindex!==null){
            const updateindex=[...todo]
            updateindex[eindex]=input;
            setTodo(updateindex)
            setIndex(null);

        }
        else{
        setTodo([...todo,input]);
        setInput('');
        }
    }

    
    function handledelete(index){
        const newtodo =[...todo]
        newtodo.splice(index,1);
        setTodo(newtodo)
    }
    function handleupdate(index){
        setInput(todo[index])
        setIndex(index);
    }
  return (
    <div className='todo-container'>
        <h1>Todo list</h1>
        <div className='input'>
            <form >
                <input type='text' value={input} onChange={handlechange}></input>
                <button onClick={handelsubmit}>Submit</button>
            </form>
        </div>
        <div className='list'>
            <ul>
                {
                    todo.map((item,index)=>(
                        
                        <li key={index}>{item}
                        <button onClick={()=>handledelete(index)}>Delete</button>
                        <button onClick={()=>handleupdate(index)}>update</button>

                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}

export default Todo