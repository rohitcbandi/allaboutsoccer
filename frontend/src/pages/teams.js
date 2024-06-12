import {Dropdown} from 'react-bootstrap/';
import React, {useState, useEffect} from 'react';
import './CardTeams.css'
import Teams from "../components/Teams"
import axios from "axios";

import SearchBar from '../components/SearchBar';
import SearchResultsList from '../components/SearchResultsList';

const gcp_address = 'https://backend-dot-cs331e-idb-377815.uc.r.appspot.com'

export const TeamsPage = () => {

	const [teams, setTeams] = useState([]); // add team

	const [selectedValue, setSelectedValue] = useState('');
  	const [data, setData] = useState([]);
	var the_selected_name_teams = sessionStorage.getItem("the_selected_name_teams"); // for selection in dropdown

	const [searchResults, setSearchResults] = useState([])

  const teamsData = async() => { 
	// getting the attributes of the sort 
	var the_val_teams = sessionStorage.getItem("the_val_teams")

	if (the_val_teams == null) {
		
		// axios.get(gcp_address +  "/teams/") // get data using API originally
		axios.get(gcp_address + "/teams/") // get data using API originally

			.then(res => {
				setTeams(res.data)
				console.log(res)
			})
			.catch(err => console.log(err))
	} else {
		// axios.get(gcp_address +  `/teams/${the_val_teams}`) // loading in the sorted data
		axios.get(gcp_address + `/teams/${the_val_teams}`) // loading in the sorted data

			.then(res => {
				console.log(selectedValue)
				setTeams(res.data)
				console.log(res)
			})

	}
  };

   // takes care of what is selected in dropdown
 const handleSelect = (e) => {
	sessionStorage.setItem("the_selected_name_teams", e)
  }

  useEffect(() => {
    teamsData();// run teamsData function that loads in data

	// initially set search results to all teams data
	setSearchResults(teams);
  }, []); // [], otherwise, never ending loop

	return ( 
		<div className="container">
    		<div>
				<br></br>
				<br></br>
				<br></br>
				<h1 style={{ textAlign: "center" }}>Teams</h1>

				<div className="row row-cols-1 row-cols-md-2 g-4">
					<div className="col">
						<Dropdown onSelect={handleSelect}>
								<Dropdown.Toggle variant="success" id="dropdown-basic">
									Sort By: {the_selected_name_teams}
								</Dropdown.Toggle>

								<Dropdown.Menu>
								<Dropdown.Item  eventKey = "Name/Descending"  onClick={() => teamsData(sessionStorage.setItem("the_val_teams",'name/descending'))}>
									Name/Descending
								</Dropdown.Item>
								<Dropdown.Item   eventKey = "Name/Ascending" onClick={() => teamsData(sessionStorage.setItem("the_val_teams",'name/ascending'))}>
									Name/Ascending
								</Dropdown.Item>
								<Dropdown.Item   eventKey = "Country/Descending" onClick={() => teamsData(sessionStorage.setItem("the_val_teams",'country/descending'))}>
									Country/Descending
								</Dropdown.Item>
								<Dropdown.Item  eventKey = "Country/Ascending"  onClick={() => teamsData(sessionStorage.setItem("the_val_teams",'country/ascending'))}>
									Country/Ascending
								</Dropdown.Item>
								<Dropdown.Item   eventKey = "League/Descending" onClick={() => teamsData(sessionStorage.setItem("the_val_teams",'league/descending'))}>
									League/Descending
								</Dropdown.Item>
								<Dropdown.Item  eventKey = "League/Ascending"  onClick={() => teamsData(sessionStorage.setItem("the_val_teams",'league/ascending'))}>
									League/Ascending
								</Dropdown.Item>
								<Dropdown.Item   eventKey = "Venue/Descending" onClick={() => teamsData(sessionStorage.setItem("the_val_teams",'venue/descending'))}>
									Venue/Descending
								</Dropdown.Item>
								<Dropdown.Item   eventKey = "Venue/Ascending" onClick={() => teamsData(sessionStorage.setItem("the_val_teams",'venue/ascending'))}>
									Venue/Ascending
								</Dropdown.Item>
								<Dropdown.Item  eventKey = "City/Descending"  onClick={() => teamsData(sessionStorage.setItem("the_val_teams",'city/descending'))}>
									City/Descending
								</Dropdown.Item>
								<Dropdown.Item  eventKey = "City/Ascending"  onClick={() => teamsData(sessionStorage.setItem("the_val_teams",'city/ascending'))}>
									City/Ascending
								</Dropdown.Item>
								<Dropdown.Item  eventKey = "Top Players/Descending"  onClick={() => teamsData(sessionStorage.setItem("the_val_teams",'top_players/descending'))}>
									Top Players/Descending
								</Dropdown.Item>
								<Dropdown.Item   eventKey = "Top Players/Ascending" onClick={() => teamsData(sessionStorage.setItem("the_val_teams",'top_players/ascending'))}>
									Top Players/Ascending
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
						<SearchBar items={teams} setSearchResults={setSearchResults}/>
					</div>
				</div>
			</div>

			<div align="right">
				<SearchResultsList searchResults={searchResults} model='teams'/>
			</div>
			

			{/*Create the cards*/}
			<Teams data={ teams }/>
		</div>
	);
};

export default TeamsPage;