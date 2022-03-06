import React, { useState, useEffect } from "react";
import authPage from "../../Authentication/Auth/auth-page";
import auth from "../../Authentication/Auth/auth";
import { useNavigate } from "react-router-dom";
import DashBoard from "../DashBoard/DashBoard";
import "./order-list.scss";
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


const OrderList = () => {

    const [orders, setOrders] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        authPage.getAllOrders().then(
            (response) => {
                setOrders(response.data);
                console.log(response);
            },
            (error) => {
                console.log("Private page", error.response);
                // Invalid token
                if (error.response && error.response.status === 403) {
                    auth.signout();
                    navigate("/signin");
                    window.location.reload();
                }
            }
        );
    }, []);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await fetch(API_URL + "/orders", { headers: authHeader() });
    //         const orders = await response.json();
    //         console.log(orders);
    //         setOrders(orders);
    //     };
    //     fetchData();
    // }, []);

    console.log({ Again: orders });

    return (
        <>
            <DashBoard />
            <div className="OrderList">
                <ul>
                    {orders.map(order => (
                        <li key={order._id}>
                            <Box>
                                <Grid>

                                    <Grid item xs="auto">
                                        <Card sx={{ maxWidth: 350 }} >
                                            {/** <CardMedia
                                        component="img"
                                        height="100"
                                        image={order.book.bookImage}
                                        alt="book"
                                    /> */}
                                            <CardContent className='BookCardContent'>
                                                <Typography gutterBottom variant="h6" component="div">
                                                    <span>{order.book.title}</span>
                                                </Typography>
                                                <Typography variant="body2">
                                                    <span>Author: </span>{order.book.author}
                                                </Typography>
                                                {/**  <Typography variant="body2" >
                                                    <span>Language: </span>{order.book.language}
                                                </Typography>
                                                <Typography variant="body2" >
                                                    <span>Quantity: </span>{order.quantity}
                                                </Typography> */}
                                            </CardContent>
                                            {/**  <CardActions style={{ "background": "#000" }}>
                                                <Button size="small">Buy</Button>
                                                <span>/</span>
                                                <Button size="small">Rent</Button>
                                            </CardActions> */}
                                        </Card>
                                    </Grid>

                                </Grid>
                            </Box>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default OrderList;