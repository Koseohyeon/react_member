import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function MemberSave() {
  const navigate = useNavigate();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [phone, setPhone] = useState('');

  const setInputEmail = (e) => {
    setEmail(e.target.value);
  }

  const setInputPassword = (e) => {
    setPassword(e.target.value);
  }

  const setInputName = (e) => {
    setName(e.target.value);
  }

  const setInputAge = (e) => {
    setAge(e.target.value);
  }

  const setInputPhone = (e) => {
    setPhone(e.target.value);
  }

  const onClickSave = () => {
    console.log(email, ', ', password, ', ', name, ', ', age, ', ', phone);

    axios
            .post("http://localhost:8088/api/save", {
                email: email,
                password: password,
                name: name,
                age: age,
                phone: phone,
            }).then((res) => {
              
                console.log(res.data.name,res.data.age);
                if(res.data>0){
                  console.log("회원 가입 성공");
                  navigate('/login');
                  

                }else{
                  console.log("회원 가입 실패");
                }
                
            }).catch((err) => {
                console.log("회원가입 실패!");
                console.log(err);
            })
  }

  return (
    <div>
      <Container style={{ width: '60%' }}>
        <Form.Group className="mb-2" controlId="username">
          <Form.Label>이메일</Form.Label>
          <Form.Control
            type="text"
            placeholder="이메일을 입력하세요."
            onChange={setInputEmail}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="password">
          <Form.Label>패스워드</Form.Label>
          <Form.Control
            type="password"
            placeholder="비밀번호를 입력하세요."
            onChange={setInputPassword}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="username">
          <Form.Label>이름</Form.Label>
          <Form.Control
            type="text"
            placeholder="이름을 입력하세요."
            onChange={setInputName}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="username">
          <Form.Label>나이</Form.Label>
          <Form.Control
            type="number"
            placeholder="나이를 입력하세요."
            onChange={setInputAge}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="username">
          <Form.Label>전화번호</Form.Label>
          <Form.Control
            type="text"
            placeholder="전화번호를 입력하세요."
            onChange={setInputPhone}
            required
          />
        </Form.Group>

        <div className="mb-4"></div>

        <Button className="w-100" variant="primary" onClick={onClickSave}>
          회원 가입
        </Button>
      </Container>
    </div>
  );
}