import React, {useState, useEffect} from 'react';
import {Dropdown} from 'react-bootstrap/';
import './CardTeams.css'
import Leagues from "../components/Leagues"

import axios from "axios";
import SearchBar from '../components/SearchBar';
import SearchResultsList from '../components/SearchResultsList';

const gcp_address = 'https://backend-dot-cs331e-idb-377815.uc.r.appspot.com'


const LeaguesPage = () => {

	const [leagues, setLeagues] = useState([]); // add league
  	const [data, setData] = useState([]);
	var the_selected_name_leagues = sessionStorage.getItem("the_selected_name_leagues");

	const [searchResults, setSearchResults] = useState([])

  const leaguesData = async () => { 
	var the_val_leagues = sessionStorage.getItem("the_val_leagues")
	if (the_val_leagues == null) {
		// axios.get(gcp_address +   "/leagues/") // get data using API
		axios.get(gcp_address +   "/leagues/") // get data using API
		.then(res => {
			setLeagues(res.data)
			console.log(res)
		})
		.catch(err => console.log(err))
	}
		else {
			// axios.get(gcp_address +  `/leagues/${the_val_leagues}`)
			axios.get(gcp_address +   `/leagues/${the_val_leagues}`)
			.then(res => {
				setLeagues(res.data)
				console.log(res)
			})
		}
  };

 // takes care of what is selected in dropdown
  const handleSelect = (e) => {
	sessionStorage.setItem("the_selected_name_leagues", e)
  }

  useEffect(() => {
    leaguesData(); // run leaguesData function that loads in data

	// initially set search results to all leagues data
	setSearchResults(leagues);
  }, []); // [], otherwise, never ending loop

	return ( 
		<div className="container">
			<div>
				<br></br>
				<br></br>
				<br></br>
				<h1 style={{ textAlign: "center" }}>Leagues</h1>

				<div className="row row-cols-1 row-cols-md-2 g-4">
					<div className="col">
						<Dropdown onSelect={handleSelect}>
							<Dropdown.Toggle variant="success" id="dropdown-basic">
							Sort By: {the_selected_name_leagues}
							</Dropdown.Toggle>

							<Dropdown.Menu>
							<Dropdown.Item eventKey = "Name/Descending" onClick={() => leaguesData(sessionStorage.setItem("the_val_leagues", 'name/descending'))}>
								Name/Descending
							</Dropdown.Item>
							<Dropdown.Item  eventKey = "Name/Ascending" onClick={() => leaguesData(sessionStorage.setItem("the_val_leagues", 'name/ascending'))}>
								Name/Ascending
							</Dropdown.Item>
							<Dropdown.Item  eventKey = "Country/Descending" onClick={() => leaguesData(sessionStorage.setItem("the_val_leagues", 'country/descending'))}>
								Country/Descending
							</Dropdown.Item>
							<Dropdown.Item  eventKey = "Country/Ascending" onClick={() => leaguesData(sessionStorage.setItem("the_val_leagues",'country/ascending'))}>
								Country/Ascending
							</Dropdown.Item>
							<Dropdown.Item  eventKey = "Teams/Descending"  onClick={() => leaguesData(sessionStorage.setItem("the_val_leagues",'teams/descending'))}>
								Teams/Descending
							</Dropdown.Item>
							<Dropdown.Item  eventKey = "Teams/Ascending" onClick={() => leaguesData(sessionStorage.setItem("the_val_leagues",'teams/ascending'))}>
								Teams/Ascending
							</Dropdown.Item>
							<Dropdown.Item  eventKey = "Top Scorers/Descending" onClick={() => leaguesData(sessionStorage.setItem("the_val_leagues",'top_scorer/descending'))}>
								Top Scorers/Descending
							</Dropdown.Item>
							<Dropdown.Item eventKey = "Top Scorers/Ascending"  onClick={() => leaguesData(sessionStorage.setItem("the_val_leagues",'top_scorer/ascending'))}>
								Top Scorers/Ascending
							</Dropdown.Item>
							<Dropdown.Item  eventKey = "Top Assists/Descending"  onClick={() => leaguesData(sessionStorage.setItem("the_val_leagues",'top_assists/descending'))}>
								Top Assists/Descending
							</Dropdown.Item>
							<Dropdown.Item  eventKey = "Top Assists/Ascending"  onClick={() => leaguesData(sessionStorage.setItem("the_val_leagues",'top_assists/ascending'))}>
								Top Assists/Ascending
							</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
						<ul>
							{/*Mapping the data for the dropdown*/}
							{data.map((item) => (
							<li key={item.id}>{item.name}</li>
							))}
						</ul>
					</div>
					
					<div className="col float-right" align="right">
						<SearchBar items={leagues} setSearchResults={setSearchResults}/>
					</div>
				</div>
			</div>

			<div align="right">
				<SearchResultsList searchResults={searchResults} model='leagues'/>
			</div>				

			<Leagues data={ leagues }/>
		</div>
	);
};

export default LeaguesPage;