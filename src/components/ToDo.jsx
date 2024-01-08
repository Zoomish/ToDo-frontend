import React from 'react';
import { BiEdit, BiSolidTrash } from "react-icons/bi";
import './ToDo.css'

const ToDo = ({text, description,type, updateToDo, deleteToDo}) => {
    var TypeText=''
    switch (type) {
        case 3:
            TypeText='Выполнено' 
            break;
        case 2:
            TypeText='В процессе'
            break;
        case 1:
            TypeText='Ожидает выполнения'
            break;
        default:
            TypeText='Ожидает выполнения'
            break;
    }

    return (
        <div className="todo">
            <div className='info'>
                <div className="text">{text}</div>
                <div className="description">{description}</div>
                <div className="Type"><p>{TypeText}</p></div>
            </div>
            
            <div className="icons">
                <BiEdit className='icon' onClick={()=>{
                    updateToDo();
                    document.getElementById('task').focus()
                }}/>
                <BiSolidTrash className='icon' onClick={deleteToDo}/>
            </div>
        </div>
    );
};

export default ToDo;