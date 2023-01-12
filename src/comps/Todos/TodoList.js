import Todo from "./Todo";
import styles from './TodoList.module.css'
function TodoList(props) {
  const { todos, deleteTodo, toggleTodo } = props
  return (
    <div className={styles.todoListContainer}>
      { todos.length !== 0
        ? todos.map((todo) => <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />)
        : <h2>Todo list is empty </h2>}
    </div>
  )
}

export default TodoList