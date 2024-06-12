import os
import sys
import unittest
import http.client
import json

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from models import Base, Teams, Player, League

class DBTestCases(unittest.TestCase):
    
    # setup for SQLAlchemy declarative_base
    engine = create_engine('sqlite:///:memory:')
    Session = sessionmaker(bind=engine)
    session = Session()

    Base.metadata.create_all(engine)

    # -------------------------
    # Unit tests for TEAMS
    # -------------------------

    # TEST THAT TEAM ATTRIBUTES ARE CORRECTLY ADDED TO DATABASE
    def test_db_query_team_info(self):
        # add new team
        t = Teams(team_id='529', name='Barcelona', country='Spain', venue='Spotify Camp Nou', city='Barcelona', 
                  top_players='"Memphis Depay, Pierre-Emerick Emiliano Franço Aubameyang, Luuk de Jong"', image='https://media.api-sports.io/football/teams/529.png')
        self.session.add(t)
        self.session.commit()

        # query and check team id, name, and country were correctly added
        r = self.session.query(Teams).filter_by(team_id = '529').first()
        self.assertEqual(str(r.team_id), '529')
        self.assertEqual(str(r.name), 'Barcelona')
        self.assertEqual(str(r.country), 'Spain')

        # delete team from database table
        self.session.query(Teams).filter_by(team_id = '529').delete()
        self.session.commit()


    # TEST THAT TEAM OBJECTS ARE CORRECTLY ADDED TO DATABASE
    def test_db_query_all_teams(self):
        # add new teams
        t1 = Teams(team_id='157', name='Bayern Munich', country='Germany', venue='Allianz Arena', city='München', 
                   top_players='"Robert Lewandowski, Serge David Gnabry, Thomas Müller"', image='https://media.api-sports.io/football/teams/157.png')
        t2 = Teams(team_id='159', name='Hertha Berlin', country='Germany', venue='Olympiastadion Berlin', city='Berlin', 
                   top_players='"Stevan Jovetić, Ishak Belfodil, Marco Richter"', image='https://media-3.api-sports.io/football/teams/159.png')
        t3 = Teams(team_id='160', name='SC Freiburg', country='Germany', venue='Europa-Park Stadion', city='Freiburg im Breisgau', 
                   top_players='"Vincenzo Grifo, Lucas Höler, Woo-Yeong Jeong"', image='https://media.api-sports.io/football/teams/160.png')
        self.session.add(t1)
        self.session.add(t2)
        self.session.add(t3)
        self.session.commit()

        # query ALL teams and check that all were correctly added
        all_teams = self.session.query(Teams).all()
        self.assertEqual(all_teams, [t1, t2, t3])

        # delete all teams from database table
        self.session.query(Teams).delete()
        self.session.commit()

    # -------------------------
    # Unit tests for PLAYERS
    # -------------------------

    # TEST THAT PLAYER ATTRIBUTES ARE CORRECTLY ADDED TO DATABASE
    def test_db_query_player_info(self):
        # add new player
        p = Player(player_id='986', name='Joel Julius Ilmari Pohjanpalo', age='29.0', nationality='Finland', team='Bayer Leverkusen', position='Attacker', league='Bundesliga', 
                   image='https://media.api-sports.io/football/players/986.png')
        self.session.add(p)
        self.session.commit()

        # query and check player id, name, and age were correctly added
        r = self.session.query(Player).filter_by(player_id = '986').first()
        self.assertEqual(str(r.player_id), '986')
        self.assertEqual(str(r.name), 'Joel Julius Ilmari Pohjanpalo')
        self.assertEqual(str(r.age), '29.0')

        # delete player from database table
        self.session.query(Player).filter_by(player_id = '986').delete()
        self.session.commit()


    # TEST THAT PLAYER OBJECTS ARE CORRECTLY ADDED TO DATABASE
    def test_db_query_all_players(self):
        # add new players
        p1 = Player(player_id='8598', name='Taiwo Micheal Awoniyi', age='26.0', nationality='Nigeria', team='Union Berlin', position='Attacker', league='Bundesliga', 
                    image='https://media-3.api-sports.io/football/players/8598.png')
        
        p2 = Player(player_id='19610', name='Omar Tyrell Crawford Richards', age='25.0', nationality='England', team='Bayern Munich', position='Defender', league='Bundesliga', 
                    image='https://media.api-sports.io/football/players/19610.png')

        p3 = Player(player_id='24882', name='Orel Johnson Mangala', age='25.0', nationality='Belgium', team='VfB Stuttgart', position='Midfielder', league='Bundesliga', 
                    image='https://media.api-sports.io/football/players/24882.png')
        self.session.add(p1)
        self.session.add(p2)
        self.session.add(p3)
        self.session.commit()

        # query ALL players and check that all were correctly added
        all_players = self.session.query(Player).all()
        self.assertEqual(all_players, [p1, p2, p3])

        # delete all players from database table
        self.session.query(Player).delete()
        self.session.commit()
    
    # -------------------------
    # Unit tests for LEAGUES
    # -------------------------
    
    # TEST THAT LEAGUE ATTRIBUTES ARE CORRECTLY ADDED TO DATABASE
    def test_db_query_league_info(self):
        # add new team
        l = League(league_id='78', name='Bundesliga', country='Germany', 
                   teams='"Bayern Munich, Borussia Dortmund, Bayer Leverkusen, RB Leipzig, Union Berlin, SC Freiburg, FC Koln, FSV Mainz 05, 1899 Hoffenheim, Borussia Monchengladbach, Eintracht Frankfurt, VfL Wolfsburg, VfL BOCHUM, FC Augsburg, VfB Stuttgart, Hertha Berlin, Arminia Bielefeld, SpVgg Greuther Furth"', 
                   top_scorer='Robert Lewandowski P. Schick E. Haaland', top_assists='Thomas Müller C. Nkunku M. Diaby', image='https://media.api-sports.io/football/leagues/78.png')
        self.session.add(l)
        self.session.commit()

        # query and check team id, name, and top scorer are correctly added
        r = self.session.query(League).filter_by(league_id = '78').first()
        self.assertEqual(str(r.league_id), '78')
        self.assertEqual(str(r.name), 'Bundesliga')
        self.assertEqual(str(r.top_scorer), 'Robert Lewandowski P. Schick E. Haaland')

        self.session.query(League).filter_by(league_id = '78').delete()
        self.session.commit()


    # TEST THAT LEAGUE OBJECTS ARE CORRECTLY ADDED TO DATABASE
    def test_db_query_all_leagues(self):
        # add new leagues
        l1 = League(league_id='78', name='Bundesliga', country='Germany', 
                    teams='"Bayern Munich, Borussia Dortmund, Bayer Leverkusen, RB Leipzig, Union Berlin, SC Freiburg, FC Koln, FSV Mainz 05, 1899 Hoffenheim, Borussia Monchengladbach, Eintracht Frankfurt, VfL Wolfsburg, VfL BOCHUM, FC Augsburg, VfB Stuttgart, Hertha Berlin, Arminia Bielefeld, SpVgg Greuther Furth"', 
                    top_scorer='Robert Lewandowski P. Schick E. Haaland', top_assists='Thomas Müller C. Nkunku M. Diaby', image='https://media.api-sports.io/football/leagues/78.png')
        l2 = League(league_id='39', name='Premier League', country='England', 
                    teams='"Manchester City, Liverpool, Chelsea, Tottenham, Arsenal, Manchester United, West Ham, Leicester, Brighton, Wolves, Newcastle, Crystal Palace, Brentford, Aston Villa, Southampton, Everton, Leeds, Burnley, Watford, Norwich"', 
                    top_scorer='Heung-Min Son Mohamed Salah Hamed Mahrous Ghaly Cristiano Ronaldo dos Santos Aveiro', 
                    top_assists='Mohamed Salah Hamed Mahrous Ghaly Trent John Alexander-Arnold J. Bowen', image='https://media.api-sports.io/football/leagues/39.png')
        l3 = League(league_id='140', name='La Liga', country='Spain', 
                    teams='"Real Madrid, Barcelona, Atletico Madrid, Sevilla, Real Betis, Real Sociedad, Villarreal, Athletic Club, Valencia, Osasuna, Celta Vigo, Rayo Vallecano, Elche, Espanyol, Getafe, Mallorca, Cadiz, Granada CF, Levante, Alaves"', 
                    top_scorer='K. Benzema Iago Aspas Juncal Vinícius Júnior', top_assists='O. Dembélé K. Benzema Vinícius Júnior', image='https://media.api-sports.io/football/leagues/140.png')
        self.session.add(l1)
        self.session.add(l2)
        self.session.add(l3)
        self.session.commit()

        # query ALL leagues and check that all were added correctly
        all_teams = self.session.query(League).all()
        self.assertEqual(all_teams, [l1, l2, l3])

        # delete all leagues from the database table
        self.session.query(League).delete()
        self.session.commit()

    # -------------------------
    # Unit tests for EXTERNAL API
    # -------------------------

    # TEST EXTERNAL API REQUEST
    def test_api_request_team_id(self):
        conn = http.client.HTTPSConnection("api-football-v1.p.rapidapi.com")

        headers = {
        'X-RapidAPI-Key': "63bc1e2db8mshc1ed35b351b304bp125863jsn8b569cbc4937",
        'X-RapidAPI-Host': "api-football-v1.p.rapidapi.com"
        }

        # API request
        conn.request("GET", "/v3/teams?id=529", headers=headers)

        res = conn.getresponse()
        data = res.read()

        # data in dictionary format
        decoded_data = json.loads(data.decode("utf-8"))

        # check that no errors occur and that the correct team name is returned from the request
        self.assertEqual(decoded_data["errors"], [])
        self.assertEqual(decoded_data["response"][0]["team"]["name"], "Barcelona")


if __name__ == '__main__':
    unittest.main()