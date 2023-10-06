import {useState} from "react";
import Swal from "sweetalert2";


const Formulario = () => {
 
  const [toDo, setToDo] = useState({
    title: "ToDo 2",
    description: "Descrption 2",
    state: "pendiente",
    priority: true
  });
const{title, description, state, priority} = toDo

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(title, description, state);
  if (!title.trim() || !description.trim()) {
      console.log("Datos incompletos");
      Swal.fire({
          title: "Error!",
          text: "Título y descripción son obligatorios",
          icon: "error",
      });
      return;
  }
 
  
};

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setToDo({
      ...toDo,
      [name]: type === 'checkbox' ? checked : value
    });
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="IngreseToDo"
        className="form-control mb-2"
        name="title"
        value={title}
        onChange={handleChange}
      />
      <textarea
        className="form-control mb-2"
        placeholder="Ingrese descripcion"
        name="description"
        value={description}
        onChange={handleChange}
      />
      <div className="form-check mb-2" >
        <input 
        type="checkbox"
        name="priority"
        className="form-check-input"
        id="inputCheck"
        checked={priority}
        onChange={handleChange}
        
        />
        <label htmlFor="inputCheck">Dar Prioridad</label>
      </div>
      <select
        className="form-select mb-2"
        name="state"
        value={state}
        onChange={handleChange}>
        <option value="pendiente">Pendiente</option>
        <option value="completado">Completado</option>
      </select>
      <button type="submit" className="btn btn-primary">
        Procesar
      </button>
     
    </form>
  );
};

export default Formulario;
