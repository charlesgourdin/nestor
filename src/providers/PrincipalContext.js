import React, { Component } from 'react';
import axios from 'axios';
export const PrincipalContext = React.createContext();

class PrincipalProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rooms: [],
            clients: [],
            roomsDisplay: [],
            clientsDisplay: [],
            filterRoomStatus: this.filterRoomStatus,
            filterClientStatus: this.filterClientStatus
        }
    }

    filterRoomStatus = (e) => {

        if (e.target.value === 'all') {
            this.setState({
                roomsDisplay: this.state.rooms,
            })
        } else {
            this.setState({
                roomsDisplay: this.state.rooms.filter(item => {
                    return item.status === e.target.value
                })
            })
        }
    }

    filterClientStatus = (e) => {

        if (e.target.value === 'all') {
            this.setState({
                clientsDisplay: this.state.clients,
            })
        } else {
            this.setState({
                clientsDisplay: this.state.clients.filter(item => {
                    return item.status === e.target.value
                })
            })
        }
    }


    componentDidMount = () => {
        axios
            .get('https://technical-test-api.herokuapp.com/rooms/')
            .then(response => response.data)
            .then(data => {
                // console.log(data)
                this.setState({ rooms: data, roomsDisplay: data })
            })

        axios
            .get('https://technical-test-api.herokuapp.com/clients')
            .then(response => response.data)
            .then(data => {
                // console.log(data)
                this.setState({ clients: data, clientsDisplay: data })
            })

    }

    render() {
        return (
            <PrincipalContext.Provider value={this.state}>
                {this.props.children}
            </PrincipalContext.Provider>
        )
    }
}

export default PrincipalProvider;