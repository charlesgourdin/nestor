import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import PrincipalProvider from './providers/PrincipalContext';
import Navbar from './components/Navbar';
import RoomList from './pages/RoomList';
import Room from './pages/Room';
import Client from './pages/Client';

function App() {
  return (
    <div className="App">
      <PrincipalProvider>
        <Navbar />
        <BrowserRouter>
          <Route exact path="/" component={RoomList} />
          <Route path="/room" component={Room} />
          <Route path="/client" component={Client} />
        </BrowserRouter>
      </PrincipalProvider>
    </div>
  );
}

export default App;
