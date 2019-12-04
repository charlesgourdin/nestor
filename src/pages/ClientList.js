import React, { useContext } from 'react';
import { PrincipalContext } from '../providers/PrincipalContext';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { NavLink as Link } from 'react-router-dom';

const ClientList = () => {
    const { clientsDisplay, filterClientStatus } = useContext(PrincipalContext)
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
                                        <Input type="radio" name="radioStatus" defaultChecked value="all" onChange={filterClientStatus} />{' '}
                                        All
                                        </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="radioStatus" value="checked-in" onChange={filterClientStatus} />{' '}
                                        checked-in
                                        </Label>
                                </FormGroup>
                                <FormGroup check >
                                    <Label check>
                                        <Input type="radio" name="radioStatus" value="checked-out" onChange={filterClientStatus} />{' '}
                                        checked-out
                                    </Label>
                                </FormGroup>
                                <FormGroup check >
                                    <Label check>
                                        <Input type="radio" name="radioStatus" value="booked" onChange={filterClientStatus} />{' '}
                                        booked
                                        </Label>
                                </FormGroup>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
                <div className='roomContainer'>
                    {clientsDisplay.map((item, i) => {
                        return (
                            <Link className="cardActive" to={`/room/${item.roomId}`}>
                                <div className="clientCard" key={i}>
                                    <b><span className="legend">Name: </span>{item.name}</b>
                                    <b><span className="legend">Email: </span>{item.email}</b>
                                    <b><span className="legend">Phone: </span>{item.phone}</b>
                                    <b><span className="legend">Birthdate: </span>{item.birthDate}</b>
                                    <b><span className="legend">Nat.: </span>{item.nationality}</b>
                                    <b><span className="legend">Status: </span>{item.status}</b>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default ClientList