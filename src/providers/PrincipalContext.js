import React, { Component } from 'react';
import axios from 'axios'
export const PrincipalContext = React.createContext();

class PrincipalProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rooms: [],
            clients: [],
            roomsDisplay: [],
            filterStatus: this.filterStatus
        }
    }

    filterStatus = (e) => {
        let filterRooms = []

        if (e.target.value === 'available') {
            filterRooms = this.state.rooms.filter(item =>{
                return item.status === 'available'
            })
        } else if (e.target.value === 'occupied') {
            filterRooms = this.state.rooms.filter(item =>{
                return item.status === 'occupied'
            })
        } else {
            filterRooms = this.state.rooms
        }

        this.setState({roomsDisplay : filterRooms})

    }


    componentDidMount = () => {
        axios
            .get('https://technical-test-api.herokuapp.com/rooms/')
            .then(response => response.data)
            .then(data => {
                // console.log(data)
                this.setState({ rooms: data })
            })

        axios
            .get('https://technical-test-api.herokuapp.com/clients')
            .then(response => response.data)
            .then(data => {
                // console.log(data)
                this.setState({ clients: data })
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