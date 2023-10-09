import Todo from "./Todo";

const Todos = ({todos, deleteTodo, updateTodo}) => {
  return (
    <>
      <h2 className="my-5 text-center">Todos</h2>
      <ul className="list-group">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
        ))}
        {todos.length === 0 &&  <li className="list-group-item text-center">Sin To Do</li>}
      </ul>
    </>
  );
};

export default Todos;
