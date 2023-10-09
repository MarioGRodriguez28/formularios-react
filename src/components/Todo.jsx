const Todo = ({todo}) => {
  const {title, description, state, priority, id} = todo;
  return (
    <li className="list-group-item">
      {" "}
      {title}
      <div>
        <div>
          <h5>{title}</h5>
          <p>{description}</p>
          <div className="d-flex gap-2">
            <button className="btn btn-sm btn-danger">Eliminar</button>
            <button className="btn btn-sm btn-success">Actualizar</button>
          </div>
        </div>
        <span className="badge text-bg-primary">
        {priority && "Prioritario"} 
        </span>
      </div>
    </li>
  );
};

export default Todo;
