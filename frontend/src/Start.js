/**
 * スタート画面の作成
 * @author 若菜
 */

import React from 'react'
import './Start.css';

export default function Start() {
  return (
    <div className="start-container">
        {/* タイトル追加 */}
        <h1 className="title">Todo×SNS</h1>
      <div className="button-container">
        <button className="btn">ログイン</button>
        <button className="btn">新規登録</button>
      </div>
       <p className="text">
        ここに説明書くよ
       </p>
    </div>
    

  )
}
