/**
 * ハンバーガーメニュー(ボタンとサイドバーをまとめて)を表示するクラス
 * @author kosei
 */



import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Todo×SNS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href='/'  >タイムライン</Nav.Link>
            <Nav.Link href='/todo' >todo+投稿</Nav.Link> 
            <Nav.Link ahref='/home' >自分の投稿</Nav.Link> 
            <Nav.Link href='/start' >スタート</Nav.Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
