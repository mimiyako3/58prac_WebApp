/**
 * ToDoリストの一覧表示
 * @author kosei
 */


import React from 'react'

import { useState } from 'react';

export default function TodoCreateForm({ uuid , todos, setTodos}) {

  //入力されているタスク
  const [todoText, setTodoText] = useState("");

  //todo追加ボタンが押されたときに実行される関数
  const addTodo = (e) => {
    //ボタンが押されてもページがリロードされないようにするため
    e.preventDefault();

    //todoTextが空のときは何もしない
    if(!todoText) return 

    //新しいtodoを作成
    const newTodo = {
      id: uuid,
      content: todoText,
      done: false,
    };

    //newTodoをtodosに追加
    setTodos([...todos, newTodo]);
    
    //todoTextを空にする
    setTodoText("");


  }


  return (
    <div>
        <form onSubmit={addTodo}>
        <input type='text' placeholder='タスクを入力' value={todoText} onChange={(e) => setTodoText(e.target.value)}/>
        <button>todo追加</button>
      </form>
    </div>
  )
}
