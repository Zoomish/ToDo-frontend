import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import { getAllToDo, addToDo, updateToDo, deleteToDo } from "./utils/HandleApi";

function App() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState(1);
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getAllToDo(setToDo,setIsLoading);
  }, []);

  const updateMode = (_id, text, description, type, setIsUpdating) => {
    setIsUpdating(true);
    setText(text);
    setDescription(description);
    setType(type);
    setToDoId(_id);
  };

  const setNull = () => {
    setText("");
    setDescription("");
    setType(1);
    setIsUpdating(false);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>ToDo App</h1>
        <div className="top">
          <div className="inputes">
            <input
            className="input"
              id="task"
              type="text"
              placeholder="Enter Task"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <input
              className="input"
              type="text"
              placeholder="Enter description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <div className="input item" data-title='
            1 - Ожидает выполнения |
            2 - В процессе |
            3 - Выполнено 
            '>
              <input 
              className="InputType"
              type="text"
              placeholder="Enter Type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              />
            </div>
          </div>
          <div
            className="add"
            onClick={
              isUpdating
                ? () =>
                    updateToDo(
                      toDoId,
                      setToDo,
                      text,
                      description,
                      type,
                      setNull,
                      setIsUpdating
                    )
                : () => addToDo(text, description, type, setNull, setToDo)
            }
          >
            {isUpdating ? "Update" : "Add"}
          </div>
        </div>
        <div className="list">
          {isLoading
          ?<h1>Идет загрузка</h1>
          :toDo.map((item) => (
            <ToDo
              key={item._id}
              text={item.text}
              description={item.description}
              type={item.type}
              updateToDo={() =>
                updateMode(
                  item._id,
                  item.text,
                  item.description,
                  item.type,
                  setIsUpdating
                )
              }
              deleteToDo={() => deleteToDo(item._id, setToDo)}
            />
          ))
        }
          {toDo.map((item) => (
            <ToDo
              key={item._id}
              text={item.text}
              description={item.description}
              type={item.type}
              updateToDo={() =>
                updateMode(
                  item._id,
                  item.text,
                  item.description,
                  item.type,
                  setIsUpdating
                )
              }
              deleteToDo={() => deleteToDo(item._id, setToDo)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
