import { useNavigate } from 'react-router-dom';

export default function Cards(props) {
  let navigate = useNavigate()
  const { data } = props;

  function HandleCardClick(event, props) {
    navigate(`./${props.name}`, {state: {league_id: props.league_id, 
                                              name: props.name, 
                                              country: props.country, 
                                              teams: props.teams, 
                                              top_scorers: props.top_scorers, 
                                              top_assists: props.top_assists,
                                              image: props.image,
                                              }})

  };

  return (
    <>
      <div className='cards'>
        {data.map(card => {
          return (
            <div className='pageCard' onClick={(event) => HandleCardClick(event, card)}>
              <img src={card.image} alt={card.name}></img>
              <p className='ver-center'>{card.name}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}