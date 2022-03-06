import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './public-page-two.scss';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const PublicPageTwo = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://remote-library-api.herokuapp.com/books');
            const books = await response.json();
            console.log(books);
            setBooks(books);
        };
        fetchData();
    }, []);

    return (
        <>
            <div className='PublicPage'>
                <div className='FlexContainer'>
                    {books.map(book => (
                        <div className='BookCard' key={book._id}>
                            <img alt='book' src={book.bookImage} />
                            <h4>{book.title}</h4>
                            <p>
                                <span>Author:</span> {book.author}
                                <br />
                                <span>Language:</span> {book.language}
                            </p>
                            <Stack spacing={2} direction="row" className="ButtonArea">
                                <Button variant="outlined" size="small"><Link to="signin">BUY</Link></Button>
                                <span>/</span>
                                <Button to="/signin" variant="outlined" size="small"><Link to="signin">RENT</Link></Button>
                            </Stack>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default PublicPageTwo;
