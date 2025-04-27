/**
 * いいね一覧を表示する画面
 * @author 花子
 */

import React from 'react'
import './Timeline.css';
import PostContent from './PostContent.js';

// 投稿データのサンプル
const PostsData = [
  {
    id: 1,
    name: "猫",
    content: "消しゴム捨てたあああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ",
    fav: 1
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
    fav: 1
  },
  {
    id: 4,
    name: "カバ",
    content: "スリッパ捨てた",
    fav: 0
  },
];


export default function Likes() {
  return (
  <div className="timeline-container">
    {/* タイムラインのタイトル */}  
    <h1 className="timeline-title kiwi-maru-medium">いいね一覧</h1>

      {/* 投稿のデータをマッピングして表示 */}
      {PostsData.map((postdata) => (
        //いいねがついているかどうか
        postdata.fav !== 0 && 
        <div key={postdata.id} className='post kiwi-maru-medium'>
          {/*投稿内容 */}
           <PostContent postdata={postdata}/>
        </div>
      ))}
  </div>
  )
}
