/**
 * チェックボックスで完了／未完了を切り替える
 * @author kosei
 */

import React from 'react'

export default function CheckBox({ todos, setTodos, todo }) {
  //チェックボックスが押されたときに実行される関数
  const handleChange = id => {
    const newTodo = todos.map(todo => 
      todo.id === id ? { ...todo, done: !todo.done } : todo
    )
    
    setTodos(newTodo);
  }
  return (
    <input
      type='checkbox'
      value={todo.content}
      onChange={() => handleChange(todo.id)}
    />
  )
}
