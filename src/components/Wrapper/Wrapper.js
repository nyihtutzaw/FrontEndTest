
import React, { useState } from 'react';
import Login from './../Login/Login.js';
import Home from './../Home/Home.js';
import { Route, Link, Switch } from 'react-router-dom';

export default function Wrapper() {


    return (
        <div className="Navbar">
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/home" component={Home} />
                
            </Switch>
        </div>
    );
}



