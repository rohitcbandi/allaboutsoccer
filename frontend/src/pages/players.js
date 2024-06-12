import React, {useState, useEffect} from 'react';
import './CardTeams.css'
import Players from "../components/Players"
import {Dropdown} from 'react-bootstrap/';
import axios from "axios";

import SearchBar from '../components/SearchBar';
import SearchResultsList from '../components/SearchResultsList';

const gcp_address = 'https://backend-dot-cs331e-idb-377815.uc.r.appspot.com'


const PlayersPage = () => {

	const [players, setPlayers] = useState([]); // add league
	const [data, setData] = useState([]);
	var the_selected_name_players = sessionStorage.getItem("the_selected_name_players");

	const [searchResults, setSearchResults] = useState([])

  const playersData = async () => { 
	var the_val_players = sessionStorage.getItem("the_val_players")

	if (the_val_players == null) {
		
		// axios.get(gcp_address +  "/players/") // get data using API
		axios.get(gcp_address +   "/players/") // get data using API
			.then(res => {
				setPlayers(res.data)
				console.log(res)
			})
			.catch(err => console.log(err))
		// setLoading(false);
		} else {

			// axios.get(gcp_address +  `/players/${the_val_players}`)
			axios.get(gcp_address +   `/players/${the_val_players}`)
			.then(res => {
				setPlayers(res.data)
				console.log(res)
			})
		}
  };
 // takes care of what is selected in dropdown
 const handleSelect = (e) => {
	sessionStorage.setItem("the_selected_name_players", e)
  }

  useEffect(() => {
    playersData(); // run playersData function that loads in data

	// initially set search results to all players data
	setSearchResults(players);
  }, []); // [], otherwise, never ending loop

	return ( 
		<div className="container">
			<div>
				<br></br>
				<br></br>
				<br></br>
				<h1 style={{ textAlign: "center" }}>Players</h1>
				<div className="row row-cols-1 row-cols-md-2 g-4">
					<div className="col">
						<Dropdown onSelect = {handleSelect}>
							<Dropdown.Toggle variant="success" id="dropdown-basic">
							Sort By:  {the_selected_name_players}
							</Dropdown.Toggle>
							<Dropdown.Menu>
							<Dropdown.Item eventKey = "Name/Descending" onClick={() => playersData(sessionStorage.setItem("the_val_players", 'name/descending'))}>
								Name/Descending
							</Dropdown.Item>
							<Dropdown.Item   eventKey = "Name/Ascending" onClick={() => playersData(sessionStorage.setItem("the_val_players",'name/ascending'))}>
								Name/Ascending
							</Dropdown.Item>
							<Dropdown.Item   eventKey = "Age/Descending" onClick={() => playersData(sessionStorage.setItem("the_val_players",'age/descending'))}>
								Age/Descending
							</Dropdown.Item>
							<Dropdown.Item   eventKey = "Age/Ascending" onClick={() => playersData(sessionStorage.setItem("the_val_players",'age/ascending'))}>
								Age/Ascending
							</Dropdown.Item>
							<Dropdown.Item   eventKey = "Nationality/Descending" onClick={() => playersData(sessionStorage.setItem("the_val_players",'nationality/descending'))}>
								Nationality/Descending
							</Dropdown.Item>
							<Dropdown.Item   eventKey = "Nationality/Ascending" onClick={() => playersData(sessionStorage.setItem("the_val_players",'nationality/ascending'))}>
								Nationality/Ascending
							</Dropdown.Item>
							<Dropdown.Item   eventKey = "Team/Descending" onClick={() => playersData(sessionStorage.setItem("the_val_players",'team/descending'))}>
								Team/Descending
							</Dropdown.Item>
							<Dropdown.Item   eventKey = "Team/Ascending" onClick={() => playersData(sessionStorage.setItem("the_val_players",'team/ascending'))}>
								Team/Ascending
							</Dropdown.Item>
							<Dropdown.Item  eventKey = "Position/Descending"  onClick={() => playersData(sessionStorage.setItem("the_val_players",'position/descending'))}>
								Position/Descending
							</Dropdown.Item>
							<Dropdown.Item   eventKey = "Position/Ascending" onClick={() => playersData(sessionStorage.setItem("the_val_players",'position/ascending'))}>
								Position/Ascending
							</Dropdown.Item>
							<Dropdown.Item   eventKey = "League/Descending" onClick={() => playersData(sessionStorage.setItem("the_val_players",'league/descending'))}>
								League/Descending
							</Dropdown.Item>
							<Dropdown.Item   eventKey = "League/Ascending" onClick={() => playersData(sessionStorage.setItem("the_val_players",'league/ascending'))}>
							League/Ascending
							</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
						<ul>
							{data.map((item) => (
							<li key={item.id}>{item.name}</li>
							))}
						</ul>
					</div>
					<div className="col float-right" align="right">
						<SearchBar items={players} setSearchResults={setSearchResults}/>
					</div>
			
				</div>
			
			</div>
			
			<div align="right">
				<SearchResultsList searchResults={searchResults} model='players'/>
			</div>

			<Players data={players}/>
		</div>
	);
};

export default PlayersPage;
