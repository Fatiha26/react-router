import React from 'react'
import { Route, Routes } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Error from './Error';

const App = () => {
    return(
        <>
        <Routes>
            <Route exact path="/about" Component={About}/>
            <Route path="/contact" Component={Contact}/>
            <Route path='*' Component={Error}/>
        </Routes>
        </>
    )
};

export default App;