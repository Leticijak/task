// import React,{useReducer} from 'react';
// import {Todo} from './model'

// type Actions =
//   | { type: 'ADD_TODO'; payload: string }
//   | { type: 'REMOVE_TODO'; payload: number }
//   | { type: 'DONE_TODO'; payload: number }

// const TodoReducer = (state:Todo[],action:Actions) => {
//   switch(action.type){
//    case 'ADD_TODO':
//    return [...state,{id:Date.now(),todo:action.payload,isDone:false}]
//    case 'REMOVE_TODO':
//      return state.filter(todo=>todo.id!==action.payload)
//    case 'DONE_TODO':
//      return state.map(todo=>todo.id!==action.payload?{...todo,isDone:!todo.isDone}:todo)

//    default:
//      return state

// }
// const ReducerExample = ()=> {
//   const[state,dispatch]=useReducer(TodoReducer,[])
//   return (
//     <div></div>
//   )
// }
// export default ReducerExample
