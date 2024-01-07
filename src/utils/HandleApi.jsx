import axios from 'axios'

const baseUrl="http://localhost:5000"

const getAllToDo=(setToDo)=>{
    axios
    .get(baseUrl)
    .then(({data})=>{
        setToDo(data)
    })
    .catch((err)=>{
        console.log(err)
    })
}

const addToDo=(text,description,type,setNull,setToDo)=>{
    if (text!=='') {
        axios
    .post(`${baseUrl}/save`, {text,description,type})
    .then(({data})=>{
        console.log(data);
        setNull()
        getAllToDo(setToDo)
    })
    .catch((err)=>{
        console.log(err)
    })
    }
    
}

const updateToDo=(toDoId, setToDo,text,description, type, setNull, setIsUpdating)=>{
    axios
    .post(`${baseUrl}/update`, {_id:toDoId, text,description,type})
    .then((data)=>{
        setNull()
        getAllToDo(setToDo)
        setIsUpdating=(false)
    })
    .catch((err)=>{
        console.log(err)
    })
}

const deleteToDo=(_id, setToDo)=>{
    axios
    .post(`${baseUrl}/delete`, {_id})
    .then((data)=>{
        getAllToDo(setToDo)
    })
    .catch((err)=>{
        console.log(err)
    })
}

export {getAllToDo, addToDo,updateToDo,deleteToDo}