/**
 * ToDoリストの一覧表示
 * @author kosei
 */


import React from 'react'
import { useState } from 'react';
// uuidインストールする
import { v4 as uuidv4} from 'uuid'
import TodoList from './TodoList';
import Post_PopUp from '../Post_PopUp';
import TodoCreateForm from './TodoCreateForm';

export default function AllTodo() {
  //入力されているタスク
  const [todos, setTodos] = useState([]);
  
  return (
   <>
    <TodoCreateForm uuid={uuidv4()} todos={todos} setTodos={setTodos}/>
    <div>
      <p>todo一覧</p>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
    <Post_PopUp todos={todos}/>
   </>
  )
}
