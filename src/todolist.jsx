import React, {useState} from 'react';

function Todolist(){

    const[tasks,settasks] = useState(["hi", "hello"]);
    const[newtask,setnewtasks] = useState("");
  
    function handleinput(event){
        setnewtasks(event.target.value) 
    }
    
    function addtasks(){
        if(newtask.trim() !==""){
            settasks(t => [...t, newtask])
            setnewtasks("");
        }
    }

    function deleteitems(index){
        const updatedtasks = tasks.filter((_,i) => i !== index);
        settasks(updatedtasks);
    }

    function moveup(index){
        if (index > 0){
            const updatedtasks = [...tasks];
            [updatedtasks[index],updatedtasks[index-1]] = 
            [updatedtasks[index-1],updatedtasks[index]]
            settasks(updatedtasks);
        }

    }

    function movedown(index){
        if (index < tasks.length-1){
            const updatedtasks = [...tasks];
            [updatedtasks[index],updatedtasks[index+1]] = 
            [updatedtasks[index+1],updatedtasks[index]]
            settasks(updatedtasks);
        }
    }

    return(
        <body>
        <div className="to-do-list">
        <h1>To-do-List</h1>
        <div>
            <input 
                type="text" 
                className='input-box'
                placeholder="Enter new task" 
                value={newtask} 
                onChange={handleinput}/>
            <button 
                className="task-button" 
                 onClick={addtasks}>Add Task</button>
        </div>

        <ol>
            {tasks.map((task, index) => 
                <li key={index}>
                     <span className='text'>{task}</span>
                    <button className='delete-button' onClick={() => deleteitems(index)}>🗑️</button>
                    <button className='move-button' onClick={() => moveup(index)}>👆</button>
                    <button className='move-button' onClick={() => movedown(index)}>👇</button>
                </li>
            )}
        </ol>
        </div>
        </body>
    )
}

export default Todolist

