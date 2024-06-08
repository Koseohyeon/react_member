import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Bookdetail = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:8088/api/book/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Data:', data);
                setBook(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Fetch error:', error);
                setError(error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!book) {
        return <div>No book found</div>;
    }

    return (
        <div>
            <h1>Book Detail</h1>
            <p><strong>ID:</strong> {book.id}</p>
            <p><strong>Title:</strong> {book.title}</p>
            <p><strong>Writher:</strong> {book.writher}</p>
            <p><strong>Publisher:</strong> {book.publisher}</p>
            <p><strong>year:</strong> {book.year}</p>
            <div>
                <img src={book.bookImage} alt={book.title} style={{ width: '200px', height: 'auto' }} />
            </div>
        </div>
    );
};

export default Bookdetail;
