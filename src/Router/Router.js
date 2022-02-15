import React, { Component, Fragment } from 'react';
import { Route,Routes } from 'react-router-dom';
import About from '../Pages/About';
import Home from '../Pages/Home';

class Router extends Component{
    render(){
        return (
            <Fragment>
                <Routes >
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path = "/about" element={<About/>}/>

                </Routes>

            </Fragment>
        );
    }
}
export default Router;