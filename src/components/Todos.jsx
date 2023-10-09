import Todo from "./Todo";

const Todos = ({ todos }) => {
  return (
    <>
      <h2 className="my-5">Todos</h2>
      <ul className="list-group">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo}/>
          
/*           
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
            <p>{todo.state ? "Completado" : "Pendiente"}</p>
            <p>{todo.priority ? "Prioridad" : "Sin prioridad"}</p>
         */
        ))}
      </ul>
    </>
  );
};

export default Todos;
