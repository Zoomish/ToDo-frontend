import React from 'react';
import { BiEdit, BiSolidTrash } from "react-icons/bi";

const ToDo = ({text, updateToDo, deleteToDo}) => {
    return (
        <div className="todo">
            <div className="text">{text}</div>
            <div className="icons">
                <BiEdit className='icon' onClick={updateToDo}/>
                <BiSolidTrash className='icon' onClick={deleteToDo}/>
            </div>
        </div>
    );
};

export default ToDo;