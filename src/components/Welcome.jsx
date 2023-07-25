import React from 'react';
import '../App.css';
import { Button } from "@nextui-org/react";
import { NavLink } from 'react-router-dom';



const Welcome = () => {
    return(
        <div className='center'>
            
            <NavLink to ="/home">
                <Button auto color="primary" flat>Sign Up</Button>
            </NavLink>

            <NavLink to ="/home">
                <Button auto color="gradient">Login</Button>
            </NavLink>

            
        </div>
    );
}

export default Welcome;