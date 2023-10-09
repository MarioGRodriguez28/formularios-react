import { useState } from "react";
import Formulario from "./components/Formulario";
import Todos from "./components/Todos";

const initialStateTodos = [
  {
    id: 1,
    title: "Todo #01",
    description: "Descripción #01",
    state: "pendiente",
    priority: true,
  },
  {
    id: 2,
    title: "Todo #02",
    description: "Descripción #02",
    state: "completado",
    priority: false,
  },
];

const App = () => {
  const [todos, setTodos] = useState(initialStateTodos);

 const addTodo= todo => {
  setTodos([...todos, todo])
 }

 const deleteTodo = id=> {
  const newArray = todos.filter(todo=> todo.id !== id)
  setTodos(newArray)
 }

 const updateTodo= (id) =>{
  const newArray = todos.map ((todo)=>{
    if (todo.id === id){
      todo.state=!todo.state
    }
    return todo;
  })
  setTodos(newArray)
 }
  return (
    <div className="container mb-2">
      <h1 className="my-5">Formularios</h1>
      <Formulario addTodo={addTodo}/>
      <Todos todos={todos} deleteTodo = {deleteTodo} updateTodo={updateTodo} />
    </div>
  );
};
export default App;
