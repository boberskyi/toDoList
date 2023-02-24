export const ToDoList = () => {
  return (
    <div>
      <h1>Todolist</h1>
      <div>
        <input type="text"/>
        <button>+</button>
      </div>
      <ul>
        <li>
          <input type="checkbox"/>
          HTML&CSS
        </li>
        <li>
          <input type="checkbox"/>
          JS
        </li>
        <li>
          <input type="checkbox"/>
          REACT
        </li>
      </ul>
      <div>
        <button>ALL</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    </div>
  );
};