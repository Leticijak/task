import React from "react"
import "./input.css"
import { Todo } from "./model"
import OneTodo from "./OneTodo"

interface Props {
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className='todos'>
      {todos.map((t) => (
        <OneTodo t={t} key={t.id} todos={todos} setTodos={setTodos}>
          {t.todo}
        </OneTodo>
      ))}
    </div>
  )
}

export default TodoList
