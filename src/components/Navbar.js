import React from 'react';
import '../App.css'
import nestorLogo from '../assets/nestorLogo.png'

const Navbar = () => {
    return (
        <div className='navbarContainer'>
            <img src={nestorLogo} alt="Nestor logo" />
        </div>
    )
}

export default Navbar