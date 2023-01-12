import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri";
import Button from "../UI/Button";
import styles from './TodosActions.module.css';

function TodoActions({ resetTodos, deleteCompletedTodos, completedExist }) {
  return (
    <div className={styles.todosActionsContainer}>
      <Button onClick={() => resetTodos()} title="Reset Todos" >
        <RiRefreshLine />
      </Button>
      
      <Button onClick={() => deleteCompletedTodos()}
              title="Clear completed Todos"
              disabled={!completedExist}
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  )
}

export default TodoActions