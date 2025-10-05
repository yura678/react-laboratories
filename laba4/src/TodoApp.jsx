
import './TodoApp.css'
import Typography from "./components/common/Typography/Typography.jsx";
import TodoList from "./components/TodoList/TodoList.jsx";

function TodoApp() {

  return (
    <>
        <Typography variant="h1">
            Todos List
        </Typography>
      <TodoList/>
    </>
  )
}

export default TodoApp
