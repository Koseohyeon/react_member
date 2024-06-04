import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Member= (props) =>{
    const {id, name, email}=props.member;

    return(
        <Card>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{id}</Card.Text>
                <Card.Text>{email}</Card.Text>
                <Link to={'/detail/'+id}>상세보기</Link>
            </Card.Body>
        </Card>
    );
}
export default Member;