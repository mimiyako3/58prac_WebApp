/**
 * いいねボタン作成
 * @author 若菜
 */

import React from 'react';
import {useState} from "react";
import './Like_button.css'

export default function Like_button() {
  
  const [liked, setLiked] = useState(false);
  const toggleLiked = () => setLiked(!liked);

  
  return (
   <>
    <div className="button-container">
      <button className = {liked ? "btn red" : "btn blue"}
      onClick = {() => {toggleLiked()}}>いいね</button>
    </div>
   </>
  )
}

