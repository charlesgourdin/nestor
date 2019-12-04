import React from 'react';
import '../App.css';
import { NavLink as Link } from 'react-router-dom';
import {Jumbotron} from 'reactstrap';

const Home = () => {
    return (
        <div className="home">
            <Link className="buttonActive" to={`/roomlist`}>
                <div className="accesCard">
                    <Jumbotron>
                        <h2 className="display-3">Rooms</h2>
                    </Jumbotron>
                </div>
            </Link>
            <Link className="buttonActive" to={`/client`}>
                <div className="accesCard">
                    <Jumbotron>
                        <h2 className="display-3">Clients</h2>
                    </Jumbotron>
                </div>
            </Link>
        </div>
    )
}

export default Home