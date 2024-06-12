import {useState, useEffect} from 'react';
import { Container, Button, Card, ListGroup } from 'react-bootstrap';
import { useNavigate, useLocation, useParams } from 'react-router-dom'
import axios from "axios";


const gcp_address = 'https://backend-dot-cs331e-idb-377815.uc.r.appspot.com'

const styles = {

  container: {
    display: 'flex',
    alignItems: 'cent1er',
    justifyContent: 'center',
    width: '100%', // make sure the parent is full screen 
    height: '100%',
    marginTop: '2rem',
    marginBottom: '2rem'
  },

  card: {
    textAlign: 'center',
    width: '24rem' // make sure the parent is full screen 
  }

}

export function SpecificPlayerPage() {
  // SETTING UP THE STATES AND VARIABLES 

  const params = useParams(); // gets the parameter
  // const path_player = '/players/' + params.name // get the path
  const path_player =  '/players/' + params.name // get the path
  const location = useLocation() // get the location
  const navigate = useNavigate() // navigate to other pages and pass data
  const [player, setPlayerData] = useState(null);

  // set up player data
  const playerData = async () => {
    // if data is found from some place else 
    if (location.state) {setPlayerData(location.state)
                        return}

    axios.get(gcp_address +  path_player) // get a single player from the API
      .then(res => {
        setPlayerData(res.data) 
      })
      .catch(err => console.log(err))
  };
  useEffect(() => {
    playerData(); // run playerData function that loads in data
  }, []);

  // league instance
  const [league, setLeague] = useState([]);
  const leagueData = async () => {
    // if player does not exist yet
    if (!player) {return} 
    // const path_league = '/leagues/' + player.league
    const path_league =  '/leagues/' + player.league

    axios.get(gcp_address +  path_league) // get a single row of league data
      .then(res => {
        setLeague(res.data)
        console.log(res)
      })
      .catch(err => console.log(err))
  };
  useEffect(() => {
    leagueData(); // run leagueData function that loads in data
  }, [player]);

  // team instance
  const [team, setTeam] = useState([]);
  const teamData = async () => {
    if (!player) {return}
    // const path_team = '/teams/' + player.team
    const path_team =  '/teams/' + player.team


    axios.get(gcp_address +  path_team) // get a single row of team data
      .then(res => {
        setTeam(res.data)
        console.log(res)
      })
      .catch(err => console.log(err))
  };
  useEffect(() => {
    teamData(); // run teamsData function that loads in data
  }, [player]); // player is a dependency

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

  // passes data from one page to another.
  function HandleTeamLinkClick(event, props) {
  
    navigate(`/teams/${team.name}`, {state: {team_id: team.team_id, 
                                              name: team.name,
                                              country: team.country,
                                              league: team.league,
                                              venue: team.venue,
                                              city: team.city,
                                              top_players: team.top_players,
                                              image: team.image,}})
  
  };
  // if player is not created 
  if (!player) {return "Loading"}
  return (
    <Container fluid style={styles.container}>
      {/* create a card object */}
      <Card style={styles.card}>
        <Card.Img variant="top" src={player.image} />
        <Card.Body>
          <Card.Title>{player.name}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{player.age}</ListGroup.Item>
          <ListGroup.Item>{player.nationality}</ListGroup.Item>
          <ListGroup.Item>{player.position}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Button variant="primary" onClick={(event) => HandleTeamLinkClick(event, player)} >Team: {player.team}</Button>
          <br></br>
          <br></br>
          <Button variant="primary" onClick={(event) => HandleLeagueLinkClick(event, player)} >League: {player.league}</Button>
        </Card.Body>
      </Card>
    </Container>
  )
}
