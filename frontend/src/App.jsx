import React from 'react';
// import './App.css';

import Navbar from "./Navigation/Navbar.js";

import { Routes, Route } from 'react-router-dom';

import Home    from './pages';
import About   from './pages/about';
import Leagues from './pages/leagues';
import { SpecificLeaguePage }   from './components/LeagueInstance';
import Teams   from './pages/teams';
import { SpecificTeamPage }   from './components/TeamInstance';
import Players from './pages/players';
import { SpecificPlayerPage }   from './components/PlayerInstance';

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route exact path='/'  element={<Home />} />
				<Route path='/about' element={<About/>} />
				<Route path='/leagues' element={<Leagues/>} />
				<Route path='/leagues/:name' element={<SpecificLeaguePage/>} />
				<Route path='/teams/page/:page' element={<Teams/>} />
				<Route path='/teams/:name' element={<SpecificTeamPage/>} />
				<Route path='/players/page/:page' element={<Players/>} />
				<Route path='/players/:name' element={<SpecificPlayerPage/>} />

			</Routes>
		</>
	);
}

export default App;
