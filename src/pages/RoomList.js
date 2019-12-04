import React, { useContext } from 'react'
import { PrincipalContext } from '../providers/PrincipalContext'
import '../App.css'
import SelectTab from '../components/SelectTab'

const RoomList = props => {
    const { roomsDisplay, filter } = useContext(PrincipalContext)
    return (
        <>
            <div className="globalScreen">
                <SelectTab />
                <div className='roomContainer'>
                    {roomsDisplay.map((item, i) => {
                        return (
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
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default RoomList