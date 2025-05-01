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
  const addTodo = async (e) => {
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

    //バックエンドにPOSTリクエストを送信
    try {
      const response = await fetch('http://localhost:8000/todo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTodo),
      });

      if (!response.ok) {
        throw new Error('Failed to add todo');
      }

      const data = await response.json();
      console.log('Todo added:', data);
    } catch (error) {
      console.error('Error:', error);
    }

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
