import React from 'react';
import '../App.css';
import nestorLogo from '../assets/nestorLogo.png';
import { Button } from 'reactstrap';
import { NavLink as Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbarContainer'>
            <img src={nestorLogo} alt="Nestor logo" />
            <div className="navButton">
                    <Link to={`/`}>
                        <Button color="warning" size="lg">Home</Button>
                    </Link>
                    <Link to={`/roomlist`}>
                        <Button color="warning" size="lg">Rooms</Button>
                    </Link>
                    <Link to={`/client`}>
                        <Button color="warning" size="lg">Clients</Button>
                    </Link>
            </div>
        </div>
    )
}

export default Navbar