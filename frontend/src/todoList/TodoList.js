/**
 * 全体の状態管理や見た目の定義
 * @author 花子
 */

import React from 'react'
import CheckBox from './CheckBox'

export default function TodoList({ todos, setTodos }) {
  
  return (
    <>
        {todos.map(todo => {
          return (
              <label key={todo.id}>
                <CheckBox todos={todos} setTodos={setTodos} todo={todo}/>
                <span>{todo.content}</span>
                <br/>
              </label>
            )
          }
        )}
    </>
      )
}
