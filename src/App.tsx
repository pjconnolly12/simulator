import React from 'react';
import './App.css';
import { Home } from './components/Home';
import { NavBar } from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Rules } from './components/Rules';
import { LeagueCalendar } from './components/Calendar';
import { Schedule } from './components/Schedule';
import { Teams } from './components/Teams';
import { Standings } from './components/Standings';

function App() {
  return (
<Router>
  <div className="flex flex-col bg-babyPowder">
    <NavBar />
    <Routes>
      <Route path='/rules' element={<Rules/>}/>
      <Route path='/teams' element={<Teams/>}/>
      <Route path='/calendar' element={<LeagueCalendar/>}/>
      <Route path='/standings' element={<Standings/>} />
      <Route path='/schedule' element={<Schedule/>}/>
      <Route path='/' element={<Home/>} />
    </Routes>
  </div>
</Router>
  );
}

export default App;
