import React, { useContext } from 'react';
import { PrincipalContext } from '../providers/PrincipalContext';
import '../App.css';

const Room = (props) => {

    const { rooms, clients } = useContext(PrincipalContext)
    const id = props.match.params.id

    return (
        <div className="globalScreen">
            <div className="roomPage">
                {rooms
                    .filter(item => item.id === id)
                    .map(item =>
                        <div className="roomCard">
                            <div className="roomName">
                                <b>{item.name}</b>
                            </div>
                            <div className="roomAddress">
                                <p>Adresse :</p>
                                <b>{item.address}</b>
                                <b>{item.zip}</b>
                                <b>{item.city}</b>
                            </div>
                            <div className="roomStatus" style={{ background: item.status === "available" ? '#71da71' : '#ff4d4d' }}>
                                <p>{item.status}</p>
                            </div>
                        </div>
                    )}
                {clients
                    .filter(item => item.roomId === id)
                    .map((item, i) => {
                        return (
                            <div className="clientCard" key={i}>
                                <b><span className="legend">Name: </span>{item.name}</b>
                                <b><span className="legend">Email: </span>{item.email}</b>
                                <b><span className="legend">Phone: </span>{item.phone}</b>
                                <b><span className="legend">Birthdate: </span>{item.birthDate}</b>
                                <b><span className="legend">Nat.: </span>{item.nationality}</b>
                                <b><span className="legend">Status: </span>{item.status}</b>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}

export default Room