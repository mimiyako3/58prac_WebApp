/**
 * ハンバーガーメニュー(ボタンとサイドバーをまとめて)を表示するクラス
 * @author kosei
 */





import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';
// import Sidebar from './Sidebar';
// import Button from 'react-bootstrap/Button';

import './Header.css';
import Sidebar from './Sidebar';

export default function Header() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <div style={{  alignItems: 'center' }}>
            <Sidebar />

          </div>
          <Navbar.Brand href="/">Todo×SNS</Navbar.Brand>
        </Container>

      </Navbar>
    </>
  )
}
