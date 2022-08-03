import React from 'react';
import {
    BrowserRouter, 
    BrowserRouter as Router, 
    Switch,
    Routes,
    Route
} from "react-router-dom";
import Landing from './landing/Landing';
import Login from './login/Login';
import Registration from './registration/Registration';
import { useSelector } from "react-redux";


export default function Layout() {
    const isAuth = useSelector((state) => state.user.isAuth);
    return(
        <BrowserRouter>
        <Switch>
        {/* <Routes> */}
            <Route exact path='/' render={()=><Landing />}/>
            <Route path="/login" render={() => <Login/>}/>
            <Route path='/registration' render={() => <Registration/>}/>
          
            {/* y */}
        </Switch>
        {/* </Routes> */}
        </BrowserRouter>
    )
}