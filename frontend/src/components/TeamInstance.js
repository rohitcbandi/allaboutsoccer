import {useState, useEffect} from 'react';
import { Container, Button, Card, ListGroup } from 'react-bootstrap';
import { useNavigate, useLocation, useParams} from 'react-router-dom'
import axios from "axios";

const gcp_address = 'https://backend-dot-cs331e-idb-377815.uc.r.appspot.com'


const styles = {

  container: {
    display: 'flex',
    alignItems: 'cent1er',
    justifyContent: 'center',
    width: '100%', // make sure the parent is full screen 
    height: '100%',
    marginTop: '2rem'
  },

  card: {
    textAlign: 'center',
    width: '24rem' // make sure the parent is full screen 
  }

}

export function SpecificTeamPage() {
  // SET UP STATES AND VARIABLES 

  const params = useParams();
  // const path_team = '/teams/' + params.name // get the path to the team
  const path_team =  '/teams/' + params.name // get the path to the team

  let navigate = useNavigate()
  let navigate_players1 = useNavigate()
  const location = useLocation() // allows us to access state passed in the url
  const [team,setTeamData] = useState(null); 

  const [player1, setplayer1] = useState(null);
  const [player2, setplayer2] = useState(null);
  const [player3, setplayer3] = useState(null);

  
  const [playerName1, setplayername1] = useState(null);
  const [playerName2, setplayername2] = useState(null);
  const [playerName3, setplayername3] = useState(null);


  // get team data
  const teamData = async () => {
    // if data is found from some place else 
    if (location.state) {setTeamData(location.state)
                        return}

    axios.get(gcp_address +  path_team) // get a single team from the API
      .then(res => {
        setTeamData(res.data) 
      })
      .catch(err => console.log(err))
  };
  useEffect(() => {
    teamData(); // run teamData function that loads in data
  }, []);


  useEffect(() => {
  // if team does not exist
  if (!team) {return}
  // parse comma separated string object

    const top_players = team.top_players.split(',')
    setplayername1(top_players[0]);
    setplayername2(top_players[1].trim());
    setplayername3(top_players[2].trim());
  })


    // league instance
  const [league, setLeague] = useState([]);
  const leagueData = async () => { 
    
    if (!team) {return} 
    // const path_league = '/leagues/' + team.league
    const path_league =  '/leagues/' + team.league

    axios.get(gcp_address +  path_league) // get a single row of league data
      .then(res => {
        setLeague(res.data)
        console.log(res)
      })
      .catch(err => console.log(err))
  };
  useEffect(() => {
    leagueData(); // run  function that loads in data
  }, [team]);


  // player1 instance
  const player1Data = async () => { 
    if (!team) {return} 
    if (!playerName1) {return}
    // const path_player1 = '/players/' + playerName1
    const path_player1 =  '/players/' + playerName1


    axios.get(gcp_address +  path_player1) // get a single row of player data
      .then(res => {
        setplayer1(res.data)
        console.log(res)
      })
      .catch(err => console.log(err))
  };
  useEffect(() => {
    player1Data(); // run  function that loads in data
  }, [team, playerName1]);


  // player 2 instance
  const player2Data = async () => { 
    if (!team) {return}
    if (!playerName2) {return}
    // const path_player2 = '/players/' + playerName2
    const path_player2 =  '/players/' + playerName2

    axios.get(gcp_address +  path_player2) // get a single row of player data
      .then(res => {
        setplayer2(res.data)
        console.log(res)
      })
      .catch(err => console.log(err))
  };
  useEffect(() => {
    player2Data(); // run  function that loads in data
  }, [team, playerName2]);


  // player 3 instance

  const player3Data = async () => { 
    if (!team) {return} 
    if (!playerName3) {return}
    // const path_player3 = '/players/' + playerName3
    const path_player3 =  '/players/' + playerName3

    axios.get(gcp_address +  path_player3) // get a single row of player data
      .then(res => {
        setplayer3(res.data)
        console.log(res)
      })
      .catch(err => console.log(err))
  };
  useEffect(() => {
    player3Data(); // run  function that loads in data
  }, [team, playerName3]);

  // player 1 func to pass data to another page
  function HandlePlayer1LinkClick() {
    console.log(player1)
    navigate_players1(`/players/${player1.name}`, {state: {name: player1.name,
                                                        age: player1.age, 
                                                        nationality: player1.nationality, 
                                                        team: player1.team, 
                                                        position: player1.position,
                                                        league: player1.league,
                                                        image: player1.image
                                                        }
                                        }
            )
                                    
  };


    // player 2 func to pass data to anothe page 

  function HandlePlayer2LinkClick() {

    navigate_players1(`/players/${player2.name}`, {state: {name: player2.name,
                                                        age: player2.age, 
                                                        nationality: player2.nationality, 
                                                        team: player2.team, 
                                                        position: player2.position,
                                                        league: player2.league,
                                                        image: player2.image
                                                        }
                                        }
            )
                                    
  };

 // player 3 function to pass data to another page 
  function HandlePlayer3LinkClick() {

    navigate_players1(`/players/${player3.name}`, {state: {name: player3.name,
                                                        age: player3.age, 
                                                        nationality: player3.nationality, 
                                                        team: player3.team, 
                                                        position: player3.position,
                                                        league: player3.league,
                                                        image: player3.image
                                                        }
                                        }
            )
                                    
  };

  // league function to pass data to another page 
  function HandleLeagueLinkClick(event, props) {
    console.log("Hello")
    console.log(league)
    navigate(`/leagues/${league.name}`, {state: {league_id: league.league_id, 
                                                        name: league.name,
                                                        country: league.country, 
                                                        teams: league.teams, 
                                                        top_scorers: league.top_scorers, 
                                                        top_assists: league.top_assists,
                                                        image: league.image
                                                        }
                                        }
            )
                                    
  };

  if (!team) {return "Loading"}
  
  return (
    <Container fluid style={styles.container}>
      {/* create a card object */}
      <Card style={styles.card}>
        <Card.Img variant="top" src={team.image} />
        <Card.Body>
          <Card.Title>{team.name}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          
          <ListGroup.Item>{team.country}</ListGroup.Item>
          <ListGroup.Item>{team.city}</ListGroup.Item>
          <ListGroup.Item>{team.venue}</ListGroup.Item>
          <ListGroup.Item><Button variant="primary" onClick={(event) => HandleLeagueLinkClick(event, team)} >League: {team.league}</Button></ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Button variant="primary" onClick={(event) => HandlePlayer1LinkClick(event, team)} >Player 1: {playerName1}</Button>
          <br></br>
          <br></br>
          <Button variant="primary" onClick={(event) => HandlePlayer2LinkClick(event, team)} >Player 2: {playerName2}</Button>
          <br></br>
          <br></br>
          <Button variant="primary" onClick={(event) => HandlePlayer3LinkClick(event, team)} >Player 3: {playerName3}</Button>
          <br></br>
        </Card.Body>
      </Card>
    </Container>
  )
}