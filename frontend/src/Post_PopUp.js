/**
 * 投稿内容の作成
 * @author 花子
 */

import React from 'react'

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Post_PopUp({ todos }) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  //done = trueのタスクのみかえす関数
  const isDone = todos.filter((todo) => todo.done === true);


  return (
    <>
    <Button variant="primary" onClick={handleShow}>
            投稿内容へ
        </Button>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>投稿内容</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>{`${isDone.length}つのタスクが完了しました`}</Form.Label>
              <ListGroup>
                {isDone.map(todo => {
                  return (
                    <ListGroup.Item key={todo.id}>{todo.content}</ListGroup.Item>
                  )
                })}
              </ListGroup>
              
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            閉じる
          </Button>
          <Button variant="primary" onClick={handleClose}>
            投稿する
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
