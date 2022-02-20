import React from 'react';
import { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './public-page.scss';

const PublicPage = () => {

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
            <div className="PublicPage">
                <Box sx={{ flexGrow: 3 }}>
                    <Grid container spacing={5}>
                        {books.map(book => (
                            <Grid item xs="auto" key={book._id}>
                                <Card sx={{ maxWidth: 350 }} >
                                    <CardMedia
                                        component="img"
                                        height="250"
                                        image={book.bookImage}
                                        alt="book"
                                    />
                                    <CardContent className='BookCardContent'>
                                        <Typography gutterBottom variant="h5" component="div">
                                            <span>{book.title}</span>
                                        </Typography>
                                        <Typography variant="body2">
                                            <span>Author: </span>{book.author}
                                        </Typography>
                                        <Typography variant="body2" >
                                            <span>Description: </span>{book.description}
                                        </Typography>
                                        <Typography variant="body2" >
                                            <span>Language: </span>{book.language}
                                        </Typography>
                                    </CardContent>
                                    <CardActions style={{ "background": "#000" }}>
                                        <Button size="small">Buy</Button>
                                        <span>/</span>
                                        <Button size="small">Rent</Button>
                                    </CardActions>
                                </Card>

                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </div>
        </>
    );
}

export default PublicPage;
