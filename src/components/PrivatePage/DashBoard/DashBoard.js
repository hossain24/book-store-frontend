import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import auth from "../../Authentication/Auth/auth";
import Private from "../Private/Private";
import SignIn from "../../Authentication/SignIn/SignIn";
import SignUp from "../../Authentication/SignIn/SignIn";
import "./dash-board.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

const DashBoard = () => {
    const [currentUser, setCurrentUser] = useState(undefined);

    useEffect(() => {
        const user = auth.getCurrentUser();

        if (user) {
            setCurrentUser(user);
        }
    }, []);

    const signOut = () => {
        auth.signout();
    };

    return (
        <>
            <div className="DashBoard">
                <nav className="navbar navbar-expand navbar-dark bg-dark">
                    <div className="navbar-nav mr-auto">

                        {currentUser && (
                            <li className="nav-item">
                                <Link to={"/order-list"} className="nav-link">
                                    OrderList
                                </Link>
                            </li>
                        )}
                    </div>

                    {currentUser ? (
                        <div className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link to={"/"} className="nav-link" onClick={signOut}>
                                    Signout
                                </Link>
                            </li>
                        </div>
                    ) : (
                        <div className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link to={"/signin"} className="nav-link">
                                    Signin
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to={"/signup"} className="nav-link">
                                    Signup
                                </Link>
                            </li>
                        </div>
                    )}
                </nav>

                <div className="container mt-3">
                    <Routes>
                        <Route path="/private" element={<Private />} />
                        <Route path="/signin" element={<SignIn />} />
                        <Route path="/signin" element={<SignUp />} />
                    </Routes>
                </div>
            </div>
        </>
    );
}

export default DashBoard;