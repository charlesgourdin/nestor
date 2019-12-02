import React, { Component } from 'react';
import axios from 'axios'
export const PrincipalContext = React.createContext();

class PrincipalProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rooms: [],
            clients: []

        }
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