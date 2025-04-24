
/**
 * ハンバーガーメニューが押された際のサイドバーを表示するクラス
 * @author kosei
 */

import React from 'react'

import './Sidebar.css'
import SidebarData from './SidebarData'


function Sidebar() {
  return (
    <>
      <input type="checkbox" id="menu" />
      <label htmlFor="menu" className="menu">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <SidebarData />
    </>
  )
}

export default Sidebar