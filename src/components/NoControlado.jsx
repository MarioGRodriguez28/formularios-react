import {useState} from "react";
import {useRef} from "react";

const NoControlado = () => {
  const form = useRef(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); //--> reinicia el error
    // capturar los datos
    const data = new FormData(form.current);
    const {title, description, state} = Object.fromEntries([...data.entries()]);

    console.log(title, description, state);
    //validar los datos
    if (!title.trim() || !description.trim() || !state.trim())
      return setError("llena este campo");
    //enviar los datos
  };

  return (
    <form onSubmit={handleSubmit} ref={form}>
      <input
        type="text"
        placeholder="IngreseToDo"
        className="form-control mb-2"
        name="title"
        defaultValue="toDo #1"
      />
      <textarea
        className="form-control mb-2"
        placeholder="Ingrese descripcion"
        name="description"
        defaultValue="Description #1"
      />
      <select
        className="form-select mb-2"
        name="state"
        defaultValue="completado">
        <option value="pendiente">Pendiente</option>
        <option value="completado">Completado</option>
      </select>
      <button type="submit" className="btn btn-primary">
        Procesar
      </button>
      {error != "" && error}
    </form>
  );
};

export default NoControlado;
