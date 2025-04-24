/**
 * タイムライン全体の状態管理や見た目の定義
 * @author 若菜
 */

import React from 'react'
import './Timeline.css';
import Like_button from './Like_button.js';

const PostsData = [
  {
    id: 1,
    name: "猫",
    content: "消しゴム捨てたあああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ",
    fav: 0
  },
  {
    id: 2,
    name: "犬",
    content: "タオル捨てた",
    fav: 0
  },
  {
    id: 3,
    name: "ウサギ",
    content: "ペットボトル捨てた",
    fav: 0
  },
  {
    id: 4,
    name: "カバ",
    content: "スリッパ捨てた",
    fav: 0
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
          <Like_button />
        </div>
      ))}
  </div>
  )
}

