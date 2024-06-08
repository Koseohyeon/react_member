import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Bookupload() {
  const navigate = useNavigate();
  
  const [title, setTitle] = useState('');
  const [writher, setwrither] = useState('');
  const [publisher, setPublisher] = useState('');
  const [year, setyear] = useState('');
  const [bookImage, setbookImage] = useState('');

  const setInputTitle = (e) => {
    setTitle(e.target.value);
  };

  const setInputwrither = (e) => {
    setwrither(e.target.value);
  };

  const setInputPublisher = (e) => {
    setPublisher(e.target.value);
  };

  const setInputsetyear = (e) => {
    setyear(e.target.value);
  };

  const setInputsetbookImage = (e) => {
    setbookImage(e.target.value);
  };

  const onClickSave = () => {
    axios
      .post("http://localhost:8088/api/book/save", {
        title: title,
        writher: writher,
        publisher: publisher,
        year: year,
        bookImage: bookImage
      })
      .then((res) => {
        console.log(res.data);
        if (res.status === 200) {
          console.log("책 등록 성공");
          navigate('/book-list');
        } else {
          console.log("책 등록 실패");
        }
      })
      .catch((err) => {
        console.log("책 등록 실패!");
        console.error(err);
      });
  };

  return (
    <div>
      <Container style={{ width: '60%' }}>
        <Form.Group className="mb-2" controlId="title">
          <Form.Label>제목</Form.Label>
          <Form.Control
            type="text"
            placeholder="제목을 입력하세요."
            onChange={setInputTitle}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="writher">
          <Form.Label>저자</Form.Label>
          <Form.Control
            type="text"
            placeholder="저자를 입력하세요."
            onChange={setInputwrither}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="publisher">
          <Form.Label>출판사</Form.Label>
          <Form.Control
            type="text"
            placeholder="출판사를 입력하세요."
            onChange={setInputPublisher}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="year">
          <Form.Label>출판년도</Form.Label>
          <Form.Control
            type="text"
            placeholder="출판년도를 입력하세요."
            onChange={setInputsetyear}
            required
          />
          </Form.Group>
        <Form.Group className="mb-2" controlId="bookImage">
          <Form.Label>이미지 주소</Form.Label>
          <Form.Control
            type="text"
            placeholder="이미지 주소를 입력하세요."
            onChange={setInputsetbookImage}
            required
          />
        </Form.Group>

        <div className="mb-4"></div>

        <Button className="w-100" variant="primary" onClick={onClickSave}>
          책 등록
        </Button>
      </Container>
    </div>
  );
}
