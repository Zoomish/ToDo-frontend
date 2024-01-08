import axios from 'axios'

const baseUrl="https://todo-backend-1k9z.onrender.com"

const getAllToDo=(setToDo,setIsLoading)=>{
    setIsLoading(true)
    axios
    .get(baseUrl)
    .then(({data})=>{
        setToDo(data)
        setIsLoading(false)
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

const updateToDo=(toDoId, setToDo,text,description, type, setNull,setIsLoading)=>{
    if (text!==''&&description!=='') {
        axios
    .post(`${baseUrl}/update`, {_id:toDoId, text,description,type})
    .then((data)=>{
        setNull()
        getAllToDo(setToDo,setIsLoading)
    })
    .catch((err)=>{
        console.log(err)
    })
    }
    else {
        alert('Заполните все поля')
    }
    
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