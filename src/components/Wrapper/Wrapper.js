import React, { useState, useEffect, useRef } from 'react';
import Login from './../Login/Login.js';
import Home from './../Home/Home.js';
import { Route, Link, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


export default function Wrapper() {


    const message = useSelector(state => state.toast.message);
    const history = useHistory();
    const login_status = useSelector(state => state.auth.login_status);


    useEffect(() => {
        if (message) {

            if (message.success) {
                toast.success(message.message, {
                    position: toast.POSITION.TOP_CENTER,

                });
            }
            else {
                toast.error(message.message, {
                    position: toast.POSITION.TOP_CENTER,

                });
            }
        }

        if (login_status) {
            if (history.location.pathname == "/login") {
                history.push("/home");
            }
        }

    })





    return (

        <div className="Navbar">
            <ToastContainer />
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/home" component={Home} />

            </Switch>

        </div>

    );
}



