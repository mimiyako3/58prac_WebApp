/**
 * ハンバーガーメニューが押された時のサイドバーのデータ(タイムライン・設定など)を格納するクラス
 * @author kosei
 */

import React from 'react'

import './SidebarData.css';

export default function SidebarData() {
  return (
    <nav className="nav">
      <ul>
        <li><a href='/'>タイムライン</a></li>
        <li><a href='/todo'>todo+投稿</a></li>
        <li><a href='/home'>自分の投稿</a></li>
        <li><a href='/start'>スタート</a></li>
      </ul>
  </nav>
  )
}
