const Todos = ({ todos }) => {
  return (
    <>
      <h2 className="my-5">Todos</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
            <p>{todo.state ? "Completado" : "Pendiente"}</p>
            <p>{todo.priority ? "Prioridad" : "Sin prioridad"}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todos;
