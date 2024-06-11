import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function BookUpload() {
  const navigate = useNavigate();
  
  const [title, setTitle] = useState('');
  const [writher, setWrither] = useState('');
  const [publisher, setPublisher] = useState('');
  const [year, setYear] = useState('');
  const [bookImage, setBookImage] = useState(null);

  const onClickSave = () => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('writher', writher);
    formData.append('publisher', publisher);
    formData.append('year', year);
    formData.append('bookImage', bookImage);

    axios
      .post("http://localhost:8088/api/book/save", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then((res) => {
        console.log(res.data);
        if (res.status === 200) {
          console.log("책 등록 성공");
          navigate('/booklist');
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
    <Container style={{ width: '60%' }}>
      <Form.Group className="mb-2" controlId="title">
        <Form.Label>제목</Form.Label>
        <Form.Control
          type="text"
          placeholder="제목을 입력하세요."
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className="mb-2" controlId="writher">
        <Form.Label>저자</Form.Label>
        <Form.Control
          type="text"
          placeholder="저자를 입력하세요."
          onChange={(e) => setWrither(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className="mb-2" controlId="publisher">
        <Form.Label>출판사</Form.Label>
        <Form.Control
          type="text"
          placeholder="출판사를 입력하세요."
          onChange={(e) => setPublisher(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className="mb-2" controlId="year">
        <Form.Label>출판년도</Form.Label>
        <Form.Control
          type="text"
          placeholder="출판년도를 입력하세요."
          onChange={(e) => setYear(parseInt(e.target.value))}
          required
        />
      </Form.Group>
      <Form.Group className="mb-2" controlId="bookImage">
        <Form.Label>이미지 주소</Form.Label>
        <Form.Control
          type="file"
          onChange={(e) => setBookImage(e.target.files[0])}
          required
        />
      </Form.Group>
      <Button className="w-100" variant="primary" onClick={onClickSave}>
        책 등록
      </Button>
    </Container>
  );
}
