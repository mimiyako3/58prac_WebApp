/**
 * タイムライン全体の状態管理や見た目の定義
 * @author 若菜
 */

import React from 'react'
import './Timeline.css';

export default function Timeline() {
  return (
  <div className="timeline-container">
    <h1 className="timeline-title kiwi-maru-medium">みんなの投稿</h1>
    <div className="post  kiwi-maru-medium">
      <h2 id="postName">名前</h2>
      <p id="postContents">投稿内容</p>
    </div>
  </div>
  )
}

