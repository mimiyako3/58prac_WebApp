/**
 * ToDoリストの一覧表示
 * @author kosei
 */


import React from 'react'
import { useState } from 'react';
// uuidインストールする
import { v4 as uuidv4} from 'uuid'
import TodoList from './TodoList';

export default function AllTodo() {
  //入力されているタスク
  const [todoText, setTodoText] = useState("");
  const todoList = [];
  const [todos, setTodos] = useState(todoList);
  const addTodo = (e) => {
    e.preventDefault();
    if(!todoText) return 
    const newTodo = {
      id: uuidv4(),
      content: todoText,
      done: false,
    };
    setTodos([...todos, newTodo]);
    setTodoText("");
  }

  
  return (
   <>
    <div>
      <p>todo作成フォーム</p>
      <form onSubmit={addTodo}>
        <input type='text' value={todoText} onChange={(e) => setTodoText(e.target.value)}/>
        <button>todo追加</button>
      </form>
    </div>
    <div>
      <p>todo一覧</p>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
   </>
  )
}
