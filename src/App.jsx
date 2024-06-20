import React from 'react'
import { Route, Routes } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import Error from './Error';
import Navbar from './Navbar';
import './index.css';

const App = () => {

    return(
        <>
        <Navbar />
        <Routes>
            <Route exact path="/about" Component={()=> <About name="About"/>}/>
            <Route path="/contact" Component={()=> <Contact name="Contact"/>}/>
            <Route path="/service" Component={()=> <Service name="Service"/>} />

            <Route path='*' Component={Error}/>
        </Routes>
        </>
    )
};

export default App;