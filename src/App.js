import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import PrincipalProvider from './providers/PrincipalContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import RoomList from './pages/RoomList';
import Room from './pages/Room';
import ClientList from './pages/ClientList';

function App() {
  return (
    <div className="App">
      <PrincipalProvider>
        <BrowserRouter>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/roomlist" component={RoomList} />
          <Route path="/client" component={ClientList} />
          <Route path="/room/:id" component={Room} />
        </BrowserRouter>
      </PrincipalProvider>
    </div>
  );
}

export default App;
