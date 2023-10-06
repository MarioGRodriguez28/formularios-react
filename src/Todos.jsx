const Todos = ({ todos }) => {
    return (
      <main>
        <h2>Todos</h2>
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
      </main>
    );
  };
  export default Todos;
  