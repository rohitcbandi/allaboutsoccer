import league_home from "../images/home/league_home.jpeg"
import team_home   from "../images/home/team_home.jpeg"
import player_home from "../images/home/player_home.jpeg"

import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardLink,
  MDBRow,
  MDBCol
} 
from 'mdb-react-ui-kit';


const Home = () => {
	return (
		<MDBRow>
		  <MDBCol sm='4'>
		  <MDBCard style = {{border: "1px solid black", margin: 20}}>
			<MDBCardImage position='top' src={league_home} style = {{height: 300}}/>
			<MDBCardBody>
				<MDBCardTitle>Leagues</MDBCardTitle>
				<MDBCardText>
				Do you want to know more about the most popular soccer leagues going on in the world?</MDBCardText>
			</MDBCardBody>
			<MDBCardBody>
				<MDBCardLink href='/leagues' class = "card text-center">See All Leagues</MDBCardLink>
      		</MDBCardBody>
    	</MDBCard>
		  </MDBCol>
		  <MDBCol sm='4'>
		  <MDBCard style = {{border: "1px solid black", margin: 20}}>
			<MDBCardImage position='top' src={team_home} style = {{height: 300}} />
			<MDBCardBody>
				<MDBCardTitle>Teams</MDBCardTitle>
				<MDBCardText>Do you want to know more about the teams in the world's most famous leagues?</MDBCardText>
			</MDBCardBody>
			<MDBCardBody>
				<MDBCardLink href='/teams/page/1' class = "card text-center">See All Teams</MDBCardLink>
      		</MDBCardBody>
    	</MDBCard>
		  </MDBCol>
		  <MDBCol sm='4'>
		  <MDBCard style = {{border: "1px solid black", margin: 20}}>
			<MDBCardImage position='top'  src={player_home} style = {{height: 300}} />
			<MDBCardBody>
				<MDBCardTitle>Players</MDBCardTitle>
				<MDBCardText>Do you want to know more about how well the players are doing in the league?</MDBCardText>
			</MDBCardBody>
			<MDBCardBody>
				<MDBCardLink href='/players/page/1' class = "card text-center">See All Players</MDBCardLink>
      		</MDBCardBody>
    	</MDBCard>
		  </MDBCol>
		</MDBRow>

	  );
	}


export default Home;
