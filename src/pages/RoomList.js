import React, { useContext } from 'react';
import { PrincipalContext } from '../providers/PrincipalContext';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import '../App.css';
import { NavLink as Link } from 'react-router-dom';

const RoomList = () => {
    const { roomsDisplay , filterRoomStatus} = useContext(PrincipalContext)
    return (
        <>
            <div className="globalScreen">
                <div className='selectTabContainer'>
                    <div className="formulaire">
                        <Form>
                            <FormGroup tag="fieldset">
                                <legend>Filter by status</legend>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="radioStatus" defaultChecked value="all" onChange={filterRoomStatus} />{' '}
                                        All
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="radioStatus" value="available" onChange={filterRoomStatus} />{' '}
                                        Avalaible
                                    </Label>
                                </FormGroup>
                                <FormGroup check >
                                    <Label check>
                                        <Input type="radio" name="radioStatus" value="occupied" onChange={filterRoomStatus} />{' '}
                                        Occupied
                                    </Label>
                                </FormGroup>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
                <div className='roomContainer'>
                    {roomsDisplay.map((item, i) => {
                        return (
                            <Link to={`/room/${item.id}`}>
                                <div className="roomCard" key={i}>
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
                            </Link>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default RoomList