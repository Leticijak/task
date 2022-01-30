import React, { useRef, useState, useEffect } from "react"
import { RiEdit2Fill } from "react-icons/ri"
import { RiDeleteBin6Fill } from "react-icons/ri"
import { BsCheck2All } from "react-icons/bs"
import { Todo } from "./model"
import "./input.css"

type Props = {
  t: Todo
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const OneTodo: React.FC<Props> = ({ t, todos, setTodos }) => {
  //-----           s t a t e              --------//
  const [edit, setEdit] = useState<boolean>(false)
  const [editTodo, setEditTodo] = useState<string>(t.todo)
  //----------------------------------------------//

  //----         f u n c t i o n s ()       ------//
  const handleDone = (id: number) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, isDone: !t.isDone } : t)))
  }
  const handleDelete = (id: number) => {
    setTodos(todos.filter((t) => t.id !== id))
  }
  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault()
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    )
    setEdit(false)
  }
  //---------------------------------------------//
  //----         R  E  F     ------//
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [edit])

  //---------------------------------------------//

  return (
    <form className='todos__single' onSubmit={(e) => handleEdit(e, t.id)}>
      {edit ? (
        <input
          ref={inputRef}
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className='todos__single__text'
        />
      ) : t.isDone ? (
        <s className='todos__single__text'>{t.todo}</s>
      ) : (
        <span className='todos__single__text'>{t.todo}</span>
      )}

      {/*-------  mark Done ------------*/}

      {/* ------------------------- */}

      <div className=''>
        <span
          className='icons'
          onClick={() => {
            if (!edit && !t.isDone) {
              setEdit(!edit)
            }
          }}
        >
          <RiEdit2Fill />
        </span>
        <span className='icons' onClick={() => handleDelete(t.id)}>
          <RiDeleteBin6Fill />
        </span>
        <span className='icons' onClick={() => handleDone(t.id)}>
          <BsCheck2All />
        </span>
      </div>
    </form>
  )
}

export default OneTodo
