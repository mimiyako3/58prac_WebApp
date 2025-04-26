/**
 * いいねボタン作成
 * @author 若菜
 */

import React from 'react';
import {useState} from "react";
import './Like_button.css'

export default function Like_button() {
  // いいねの状態を管理するためのuseStateフックを使用
  // likedがtrueなら赤、falseなら青
  const [liked, setLiked] = useState(false);
  const toggleLiked = () => setLiked(!liked);

  
  return (
   <>
    <div className="button-container">

      {/* ボタンが赤か青か押したら変わる */}
      <button className = {liked ? "btn red" : "btn blue"} 
      onClick = {() => {toggleLiked()}}>いいね</button>
    </div>
   </>
  )
}

