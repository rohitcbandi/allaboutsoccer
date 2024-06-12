import {useState, useEffect} from 'react';
import { Container, Button, Card, ListGroup } from 'react-bootstrap';
import { useNavigate, useParams, useLocation } from 'react-router-dom'
import axios from "axios";

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

const gcp_address = 'https://backend-dot-cs331e-idb-377815.uc.r.appspot.com'


export function SpecificLeaguePage() {

  // SETTING THE STATES AND VARIABLES

  const location = useLocation() // allows us to access state passed in the url
  const params = useParams(); // use parameters 
  let navigate = useNavigate() // navigate to other pages

  const [league, setLeagueData] = useState(null); 
  
  // const league_path = '/leagues/' + params.name; 
  const league_path =  '/leagues/' + params.name; 

  const [topteam1, setteam1] = useState(null);
  const [topteam2, setteam2] = useState(null);
  const [topteam3, setteam3] = useState(null);

  
  const [team1name, sett1name] = useState(null);
  const [team2name, sett2name] = useState(null);
  const [team3name, sett3name] = useState(null);


  const [player1assists, setplayerass1] = useState(null);
  const [player2assists, setplayerass2] = useState(null);
  const [player3assists, setplayerass3] = useState(null);

  
  const [playernameas1, setplayernameas1] = useState(null);
  const [playernameas2, setplayernameas2] = useState(null);
  const [playernameas3, setplayernameas3] = useState(null);


  const [playersc1, setplayersc1] = useState(null);
  const [playersc2, setplayersc2] = useState(null);
  const [playersc3, setplayersc3] = useState(null);

  
  const [playerNamesc1, setplayernamesc1] = useState(null);
  const [playerNamesc2, setplayernamesc2] = useState(null);
  const [playerNamesc3, setplayernamesc3] = useState(null);

  // LEAGUE DATA ITSELF

  const leagueData = async () => {
    // if data is found from some place else 
    if (location.state) {setLeagueData(location.state)
                        return}

    axios.get(gcp_address +  league_path) // get a single player from the API
      .then(res => {
        setLeagueData(res.data) 
      })
      .catch(err => console.log(err))
  };
  useEffect(() => {
    leagueData(); // run playerData function that loads in data
  }, []);

  useEffect(() => {
    // IF LEAGUE DOES NOT EXIST YET 
    if (!league) {return}
    const teams = league.teams.split(',');
    sett1name(teams[0].trim());
    sett2name(teams[1].trim());
    sett3name(teams[2].trim());

  
    const top_assists = league.top_assists.split(',');
    setplayernameas1(top_assists[0].trim());
    setplayernameas2(top_assists[1].trim());
    setplayernameas3(top_assists[2].trim());

    const top_scorers = league.top_scorers.split(',');
    setplayernamesc1(top_scorers[0].trim());
    setplayernamesc2(top_scorers[1].trim());
    setplayernamesc3(top_scorers[2].trim());

  })





  // TOP SCORER 1 Instance 
  const player1ScoreData = async () => { 
    if (!league) {return}
    if(!playerNamesc1) {return}
    const path_playerscorer1 =  '/players/' + playerNamesc1

    axios.get(gcp_address +  path_playerscorer1) // get a single row of  data
      .then(res => {
        setplayersc1(res.data)
        console.log(res)
      })
      .catch(err => console.log(err))
  };
  useEffect(() => {
    player1ScoreData(); // run  function that loads in data
  }, [league, playerNamesc1]);

    function HandlePlayerTopScorer1() {

      navigate(`/players/${playersc1.name}`, {state: {name: playersc1.name,
                                                          age: playersc1.age, 
                                                          nationality: playersc1.nationality, 
                                                          team: playersc1.team, 
                                                          position: playersc1.position,
                                                          league: playersc1.league,
                                                          image: playersc1.image
                                                          }
                                          }
              )
                                      
    };

  // TOP SCORER 2 Instance 
  const player2ScoreData = async () => { 
    if (!league) {return}
    if(!playerNamesc2) {return}

    const path_playerscorer2 =  '/players/' + playerNamesc2

    axios.get(gcp_address +  path_playerscorer2) // get a single row of  data
      .then(res => {
        setplayersc2(res.data)
        console.log(res)
      })
      .catch(err => console.log(err))
  };
  useEffect(() => {
    player2ScoreData(); // run  function that loads in data
  }, [league, playerNamesc2]);

  function HandlePlayerTopScorer2() {

    navigate(`/players/${playersc2.name}`, {state: {name: playersc2.name,
                                                        age: playersc2.age, 
                                                        nationality: playersc2.nationality, 
                                                        team: playersc2.team, 
                                                        position: playersc2.position,
                                                        league: playersc2.league,
                                                        image: playersc2.image
                                                        }
                                        }
            )
                                    
  };


  // TOP SCORER 3 Instance 

  const player3ScoreData = async () => { 
    if (!league) {return}
    if(!playerNamesc3) {return}

    const path_player3 =  '/players/' + playerNamesc3

    axios.get(gcp_address +  path_player3) // get a single row of team data
      .then(res => {
        setplayersc3(res.data)
        console.log(res)
      })
      .catch(err => console.log(err))
  };
  useEffect(() => {
    player3ScoreData(); // run  function that loads in data
  }, [league, playerNamesc3]);

  function HandlePlayerTopScorer3() {

    navigate(`/players/${playersc3.name}`, {state: {name: playersc3.name,
                                                        age: playersc3.age, 
                                                        nationality: playersc3.nationality, 
                                                        team: playersc3.team, 
                                                        position: playersc3.position,
                                                        league: playersc3.league,
                                                        image: playersc3.image
                                                        }
                                        }
            )
                                    
  };


    // TOP ASSISTANCE 1  Instance

    const player1AssistsData = async () => { 
      if (!league) {return}
      if (!playernameas1) {return}
      const path_playersassists1 =  '/players/' + playernameas1

      axios.get(gcp_address +  path_playersassists1) // get a single row of  data
        .then(res => {
          setplayerass1(res.data)
          console.log(res)
        })
        .catch(err => console.log(err))
    };
    useEffect(() => {
      player1AssistsData(); // run  function that loads in data
    }, [league, playernameas1]);
  
      function HandlePlayerTopAssistance1() {
  
        navigate(`/players/${player1assists.name}`, {state: {name: player1assists.name,
                                                            age: player1assists.age, 
                                                            nationality: player1assists.nationality, 
                                                            team: player1assists.team, 
                                                            position: player1assists.position,
                                                            league: player1assists.league,
                                                            image: player1assists.image
                                                            }
                                            }
                )
                                        
      };
  
    // TOP ASSISTANCE 2  Instance
    const player2AssistsData = async () => { 
      if (!league) {return}
      if (!playernameas2) {return}
      const path_playersassists2 =  '/players/' + playernameas2

      axios.get(gcp_address +  path_playersassists2) // get a single row of  data
        .then(res => {
          setplayerass2(res.data)
          console.log(res)
        })
        .catch(err => console.log(err))
    };
    useEffect(() => {
      player2AssistsData(); // run  function that loads in data
    }, [league, playernameas2]);
  
    function HandlePlayerTopAssistance2() {
  
      navigate(`/players/${player2assists.name}`, {state: {name: player2assists.name,
                                                          age: player2assists.age, 
                                                          nationality: player2assists.nationality, 
                                                          team: player2assists.team, 
                                                          position: player2assists.position,
                                                          league: player2assists.league,
                                                          image: player2assists.image
                                                          }
                                          }
              )
                                      
    };
  
  
    // TOP ASSISTANCE 3  Instance
  
    const player3AssistsData = async () => { 
      if (!league) {return}
      if (!playernameas3) {return}
      const path_playersassists3 =  '/players/' + playernameas3

      axios.get(gcp_address +  path_playersassists3) // get a single row of  data
        .then(res => {
          setplayerass3(res.data)
          console.log(res)
        })
        .catch(err => console.log(err))
    };
    useEffect(() => {
      player3AssistsData(); // run  function that loads in data
    }, [league, playernameas3]);
  
   // player 3 function
    function HandlePlayerTopAssistance3() {
  
      navigate(`/players/${player3assists.name}`, {state: {name: player3assists.name,
                                                          age: player3assists.age, 
                                                          nationality: player3assists.nationality, 
                                                          team: player3assists.team, 
                                                          position: player3assists.position,
                                                          league: player3assists.league,
                                                          image: player3assists.image
                                                          }
                                          }
              )
                                      
    };

    // TOP THREE TEAMS


    // First Team
    const team1Data = async () => { 
      if (!league) {return}
      if(!team1name) {return}
      const path_topteam1 =  '/teams/' + team1name

      axios.get(gcp_address +  path_topteam1) // get a single row of team data
        .then(res => {
          setteam1(res.data)
          console.log(res)
        })
        .catch(err => console.log(err))
    };
    useEffect(() => {
      team1Data(); // run  function that loads in data
    }, [league, team1name]);
  
      function HandleTopTeam1() {
        navigate(`/teams/${topteam1.name}`, {state: {team_id: topteam1.team_id, 
          name: topteam1.name,
          country: topteam1.country,
          league: topteam1.league,
          venue: topteam1.venue,
          city: topteam1.city,
          top_players: topteam1.top_players,
          image: topteam1.image,}})
                                        
      };
  
    //  Second Team
    const team2Data = async () => { 
      if (!league) {return}
      if(!team2name) {return}
      const path_topteam2 =  '/teams/' + team2name

      axios.get(gcp_address +  path_topteam2) // get a single row of team data
        .then(res => {
          setteam2(res.data)
          console.log(res)
        })
        .catch(err => console.log(err))
    };
    useEffect(() => {
      team2Data(); // run  function that loads in data
    }, [league, team2name]);
  
    function HandleTopTeam2() {
  
      navigate(`/teams/${topteam2.name}`, {state: {team_id: topteam2.team_id, 
        name: topteam2.name,
        country: topteam2.country,
        league: topteam2.league,
        venue: topteam2.venue,
        city: topteam2.city,
        top_players: topteam2.top_players,
        image: topteam2.image,}})
                                      
    };
  
  
    // 3rd Team instance
  
    const team3Data = async () => { 
      if (!league) {return}
      if(!team3name) {return}
      const path_topteam3 =  '/teams/' + team3name

      axios.get(gcp_address +  path_topteam3) // get a single row of team data
        .then(res => {
          setteam3(res.data)
          console.log(res)
        })
        .catch(err => console.log(err))
    };
    useEffect(() => {
      team3Data(); // run  function that loads in data
    }, [league, team3name]);
  
   // player 3 function
    function HandleTopTeam3() {
  
      navigate(`/teams/${topteam3.name}`, {state: {team_id: topteam3.team_id, 
        name: topteam3.name,
        country: topteam3.country,
        league: topteam3.league,
        venue: topteam3.venue,
        city: topteam3.city,
        top_players: topteam3.top_players,
        image: topteam3.image,}})
                                      
    };
    
    // awaiting API calls and loading in data
    if (!league) {return "Loading"}


  return (
    <Container fluid style={styles.container}>
      {/* create a card object */}
      <Card style={styles.card}>
        <Card.Img variant="top" src={league.image} />
        <Card.Body>
          <Card.Title>{league.name}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{league.country}</ListGroup.Item>
          <ListGroup.Item><h1>Top 3 Teams</h1>
          <Button variant="primary" onClick={(event) => HandleTopTeam1(event, league)} >Team 1: {team1name}</Button>
          <br></br>
          <br></br>
          <Button variant="primary" onClick={(event) => HandleTopTeam2(event, league)} >Team 2: {team2name}</Button>
          <br></br>
          <br></br>
          <Button variant="primary" onClick={(event) => HandleTopTeam3(event, league)} >Team 3: {team3name}</Button>
          <br></br>         
          
          </ListGroup.Item>
          <ListGroup.Item><h1>Top Scorers</h1>
          <Button variant="primary" onClick={(event) => HandlePlayerTopScorer1(event, league)} >Player 1: {playerNamesc1}</Button>
          <br></br>
          <br></br>
          <Button variant="primary" onClick={(event) => HandlePlayerTopScorer2(event, league)} >Player 2: {playerNamesc2}</Button>
          <br></br>
          <br></br>
          <Button variant="primary" onClick={(event) => HandlePlayerTopScorer3(event, league)} >Player 3: {playerNamesc3}</Button>
          <br></br>
          </ListGroup.Item>
          <ListGroup.Item><h1>Top Assists</h1>
          <Button variant="primary" onClick={(event) => HandlePlayerTopAssistance1(event, league)} >Player 1: {playernameas1}</Button>
          <br></br>
          <br></br>
          <Button variant="primary" onClick={(event) => HandlePlayerTopAssistance2(event, league)} >Player 2: {playernameas2}</Button>
          <br></br>
          <br></br>
          <Button variant="primary" onClick={(event) => HandlePlayerTopAssistance3(event, league)} >Player 3: {playernameas3}</Button>
          <br></br>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </Container>
  )
}