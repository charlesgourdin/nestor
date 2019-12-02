import React, { useContext } from 'react'
import { PrincipalContext } from '../providers/PrincipalContext'
import './Pages.css'

const RoomList = props => {
    const { rooms } = useContext(PrincipalContext)
    return (
        <>
            <>  <div>

                </div>
                <div className='roomContainer'>
                    {rooms.map((item, i) => {
                        return (
                            <div className="roomCard" key={i}>
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