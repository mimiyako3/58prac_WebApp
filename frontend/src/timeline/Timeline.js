/**
 * タイムライン全体の状態管理や見た目の定義
 * @author 若菜
 */

import React from 'react'
import './Timeline.css';

const PostsData = [
  {
    id: 1,
    name: "猫",
    content: "消しゴム捨てたあああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ",
  },
  {
    id: 2,
    name: "犬",
    content: "タオル捨てた",
  },
  {
    id: 3,
    name: "ウサギ",
    content: "ペットボトル捨てた",
  },
  {
    id: 4,
    name: "カバ",
    content: "スリッパ捨てた",
  },
];

export default function Timeline() {
  return (
  <div className="timeline-container">
    <h1 className="timeline-title kiwi-maru-medium">みんなの投稿</h1>
      {PostsData.map((post) => (
        <div key={post.id} className='post kiwi-maru-medium'>
          <h2 id="postName">{post.name}さん</h2>
          <p id="postContents">{post.content}</p>
        </div>
      ))}
  </div>
  )
}

