import React, { useEffect, useState } from 'react';
import Book from '../../components/Book';
import axios from 'axios';

export default function Booklist() {

  const [books, setBooks] = useState([]);

  useEffect(()=> {
    // 초기화
    axios.get("http://localhost:8088/api/book/list")
    .then((res) => {
      console.log("data: ", res.data);
      setBooks(res.data);
    })
    .catch((error) => {
      console.log("오류 발생!!!!");
      console.log(error);
    })
  }, []);

  return (
    <div>
        <h1>책 리스트 페이지</h1>
        <div>
        {
          books.map((book) => 
            <Book key={book.id} book={book} />
          )
        }
        </div>
    </div>
  )
}
