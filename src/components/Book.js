import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Book = (props) => {
  const { id, title, writher, publisher, year, bookImage } = props.book;

  console.log('Book imageUrl:', bookImage);

  return (
    <Card className="d-flex flex-row" style={{ alignItems: 'center' }}>
      <Card.Body style={{ flex: 1 }}>
        <Card.Text>{id}</Card.Text>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{writher}</Card.Text>
        <Card.Text>{publisher}</Card.Text>
        <Card.Text>{year}</Card.Text>
        <Link to={'/book/detail/' + id}>상세보기</Link>
      </Card.Body>
      <Card.Img 
        variant="right" 
        src={bookImage} 
        alt={"description"} 
        style={{ width: '200px', height: 'auto', objectFit: 'cover' }} 
      />
    </Card>
  );
}

export default Book;
