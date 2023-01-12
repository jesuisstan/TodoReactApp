import { useState} from "react";
import styles from './TodoForm.module.css'
import Button from "../UI/Button";

function TodoForm({ addTodo }) {
  const [text, setText] = useState('')
  const onSubmitHandler = (event) => {
    event.preventDefault()
    if(text)
      addTodo(text)
    setText('')
  }
  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          placeholder="Enter new todo"
          value={text}
          onChange={(ev) => setText(ev.target.value)}
        />
        <Button type="submit" title="Add Todo to list">Submit</Button>
      </form>
    </div>
  )
}

export default TodoForm
