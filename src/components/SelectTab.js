import React, { useContext } from 'react';
import { PrincipalContext } from '../providers/PrincipalContext';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import '../App.css'

const SelectTab = () => {
    const { filterStatus, filterCity } = useContext(PrincipalContext)

    return (
        <div className='selectTabContainer'>
            <Form>
                <FormGroup tag="fieldset">
                    <legend>Filter by status</legend>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="radioStatus" defaultChecked value="all" onChange={filterStatus} />{' '}
                            All
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="radioStatus" value="available" onChange={filterStatus} />{' '}
                            Avalaible
                        </Label>
                    </FormGroup>
                    <FormGroup check >
                        <Label check>
                            <Input type="radio" name="radioStatus" value="occupied" onChange={filterStatus} />{' '}
                            Occupied
                        </Label>
                    </FormGroup>
                </FormGroup>
            </Form>
        </div>
    )
}

export default SelectTab