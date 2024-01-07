import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import { getAllToDo,addToDo, updateToDo,deleteToDo } from "./utils/HandleApi";


function App() {

  const [toDo, setToDo]=useState([])
  const [text,setText]=useState('')
  const [description, setDescription]=useState('')
  const [type, setType]=useState(1)
  const [isUpdating, setIsUpdating]=useState(false)
  const [toDoId,setToDoId]=useState('')


  useEffect(()=>{
    getAllToDo(setToDo)
},[])

  const updateMode=(_id,text,description,type)=>{
    setIsUpdating(true)
    setText(text)
    setDescription(description)
    setType(type)
    setToDoId(_id)
  }

  const setNull=()=>{
    setText('')
    setDescription('')
    setType(1)
  }

  return (
    <div className="App">
      <div className='container'>
        <h1>ToDo App</h1>
        <div className='top'>
          <input 
          type="text" 
          placeholder='Enter Task' 
          value={text}
          onChange={(e)=>setText(e.target.value)}
          />
          <input 
          type="text" 
          placeholder='Enter description' 
          value={description}
          onChange={(e)=>setDescription(e.target.value)}
          />
          <input 
          type="text" 
          placeholder='Enter Type' 
          value={type}
          onChange={(e)=>setType(e.target.value)}
          />
          <div 
          className="add" 
          onClick={isUpdating?()=>updateToDo(toDoId, setToDo,text,description, type, setNull, setIsUpdating):()=>addToDo(text,description,type,setNull,setToDo)
          }>
            {isUpdating?'Update':'Add'}
          </div>
        </div>
        <div className="list">
          {toDo.map((item)=>
            <ToDo 
            key={item._id} 
            text={item.text}
            description={item.description}
            type={item.type}
            updateToDo={()=>updateMode(item._id, item.text,item.description, item.type)}
            deleteToDo={()=>deleteToDo(item._id,setToDo)}
            />
          )}
        </div>
      </div>

    </div>
  );
}

export default App;
