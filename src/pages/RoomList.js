import React, { useContext } from 'react'
import { PrincipalContext } from '../providers/PrincipalContext'

const RoomList = props => {
    const { rooms } = useContext(PrincipalContext)
    return (
        <>
            <>
                <div>
                    {rooms.map((item, i) => {
                        return (
                            <div key={i} style={{border: '1px black solid'}}>
                                <p>{item.name}</p>
                                <p>{item.address}</p>
                                <p>{item.zip}</p>
                                <p>{item.city}</p>
                                <p>{item.status}</p>
                            </div>
                        )
                    })}
                </div>
            </>
        </>
    )
}

export default RoomList