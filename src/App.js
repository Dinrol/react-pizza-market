import React from 'react';
import {Route} from 'react-router-dom'
import Header from "./components/Home/Header/Header";
import Cart from "./components/CartPage/Cart";
import Home from "./components/Home/Home";


const App = () => {

    return (
        <div className="wrapper">
            <Header/>
            <Route exact path='/' component={Home}/>
            <Route exact path='/cart' component={Cart}/>
        </div>
    )
}


export default (App);
