from flask import Flask, jsonify
from flask_cors import CORS
from flask_restful import Resource, Api, reqparse
import psycopg2

app = Flask(__name__)
CORS(app)
api = Api(app)

#unix_socket = '/cloudsql/{}'.format('cs331e-idb-377815:us-central1:allaboutsoccer')
conn = psycopg2.connect(
    database="db",
    user="postgres",
    password="JpL|D?3~zVQ{E6.R",
    host='34.66.21.52',
)


'''
To load in all data to leagues, teams, and players
'''
class Player(Resource):
    # def get(self, player_id):
    #     cur = conn.cursor()
    #     cur.execute("SELECT * FROM player WHERE player_id=%s", (str(player_id),))
    #     row = cur.fetchone()
    #     if row:
    #         return {'player_id': row[0], 'name': row[1], 'age': int(float(row[2])), 'nationality': row[3], 'team': row[4], 'position': row[5], 'league': row[6]}
    #     else:
    #         return {'message': 'Player not found'}, 404
        
    def get(self):
        cur = conn.cursor()
        cur.execute("SELECT * FROM player")
        rows = cur.fetchall() 
        print("total rows are: ", len(rows))
        players = []
        for row in rows:
            player = {'player_id': row[0], 'name': row[1], 
                        'age': row[2], 'nationality': row[3], 
                        'team': row[4], 'position': row[5], 
                        'league': row[6], 'image' : row[7]}
            players.append(player)
        return players

class Team(Resource):
    def get(self):
    # def get(self, team_id):
        # cur = conn.cursor()
        # cur.execute("SELECT * FROM teams WHERE team_id=%s", (str(team_id),))
        # row = cur.fetchone()
        # if row:
        #     return {'team_id': row[0], 'name': row[1], 'country': row[2], 'venue': row[3], 'city': row[4], 'top_players': row[5]}
        # else:
        #     return {'message': 'Team not found'}, 404
        cur = conn.cursor()
        cur.execute("SELECT * FROM teams")
        rows = cur.fetchall() 
        print("total rows are: ", len(rows))
        teams = []
        for row in rows:
            team =  {'team_id': row[0], 'name': row[1], 'country': row[2], 'league': row[3], 'venue': row[4], 'city': row[5], 'top_players': row[6], 'image' : row[7]}
            # team =  {'team_id': row[0], 'name': row[1], 'country': row[2], 'venue': row[3], 'city': row[4], 'top_players': row[5]}
            teams.append(team)
        return teams
    
class League(Resource):
    def get(self):
    # def get(self, league_id):
        # cur = conn.cursor()
        # cur.execute("SELECT * FROM league WHERE league_id=%s", (str(league_id),))
        # row = cur.fetchone()
        # if row:
        #     return {'league_id': row[0], 'name': row[1], 'country': row[2], 'teams': row[3], 'top_scorers': row[4], 'top_assists': row[5], 'image': row[6]}
        # else:
        #     return {'message': 'League not found'}, 404

        cur = conn.cursor()
        cur.execute("SELECT * FROM league")
        rows = cur.fetchall() 
        print("total rows are: ", len(rows))
        leagues = []
        for row in rows:
            league = {'league_id': row[0], 'name': row[1], 'country': row[2], 'teams': row[3], 'top_scorers': row[4], 'top_assists': row[5], 'image': row[6]}
            leagues.append(league)
        return leagues   


'''
To access data from Instance Card
'''
# Frome Players card to access Team & League data
class AccessLeague(Resource):
    def get(self, name):
        cur = conn.cursor()
        cur.execute("SELECT * FROM league WHERE name=%s", (name,))
        row = cur.fetchone()
        if row:
            return {'league_id': row[0], 'name': row[1], 'country': row[2], 'teams': row[3], 
                    'top_scorers': row[4], 'top_assists': row[5], 'image': row[6]}
        else:
            return {'message': 'League not found'}, 404

class AccessTeam(Resource):
    def get(self, name):
        cur = conn.cursor()
        cur.execute("SELECT * FROM teams WHERE name=%s", (name,))
        row = cur.fetchone()
        if row:
            return {'team_id': row[0], 'name': row[1], 'country': row[2], 'league': row[3], 'venue': row[4], 'city': row[5], 'top_players': row[6], 'image' : row[7]}

        else:
            return {'message': 'League not found'}, 404

class AccessPlayer(Resource):
    def get(self, name):
        cur = conn.cursor()
        cur.execute("SELECT * FROM player WHERE name=%s", (name,))
        row = cur.fetchone()
        if row:
            return {'player_id': row[0], 'name': row[1], 'age': row[2], 'nationality': row[3], 'team': row[4], 
                    'position': row[5], 'league': row[6], 'image': row[7]}
        else:
            return {'message': 'League not found'}, 404

class SortLeague(Resource):
    def get(self, attribute, sort_type):
        if sort_type == 'ascending':
            sorted_leagues = []
            cur = conn.cursor()
            cur.execute(f"select * from league order by {attribute}")
            rows = cur.fetchall()
            for row in rows:
                if row:
                    league = {'league_id': row[0], 'name': row[1], 'country': row[2], 'teams': row[3], 'top_scorers': row[4], 'top_assists': row[5], 'image': row[6]}
                    sorted_leagues.append(league)
            return sorted_leagues
        else:
            sorted_leagues = []
            cur = conn.cursor()
            cur.execute(f"select * from league order by {attribute} desc")
            rows = cur.fetchall()
            for row in rows:
                if row:
                    league = {'league_id': row[0], 'name': row[1], 'country': row[2], 'teams': row[3], 'top_scorers': row[4], 'top_assists': row[5], 'image': row[6]}
                    sorted_leagues.append(league)
            return sorted_leagues

class SortTeam(Resource):
    def get(self, attribute, sort_type):
        if sort_type == 'ascending':
            sorted_teams = []
            cur = conn.cursor()
            cur.execute(f"select * from teams order by {attribute}")
            rows = cur.fetchall()
            for row in rows:
                if row:
                    team = {'team_id': row[0], 'name': row[1], 'country': row[2], 'league': row[3], 'venue': row[4], 'city': row[5], 'top_players': row[6], 'image' : row[7]}
                    sorted_teams.append(team)
            return sorted_teams
        else:
            sorted_teams = []
            cur = conn.cursor()
            cur.execute(f"select * from teams order by {attribute} desc")
            rows = cur.fetchall()
            for row in rows:
                if row:
                    team = {'team_id': row[0], 'name': row[1], 'country': row[2], 'league': row[3], 'venue': row[4], 'city': row[5], 'top_players': row[6], 'image' : row[7]}
                    sorted_teams.append(team)
            return sorted_teams 

class SortPlayer(Resource):
    def get(self, attribute, sort_type):
        if sort_type == 'ascending':
            sorted_players = []
            cur = conn.cursor()
            cur.execute(f"select * from player order by {attribute}")
            rows = cur.fetchall()
            for row in rows:
                if row:
                    player = {'player_id': row[0], 'name': row[1], 
                            'age': row[2], 'nationality': row[3], 
                            'team': row[4], 'position': row[5], 
                            'league': row[6], 'image' : row[7]}
                    sorted_players.append(player)
            return sorted_players
        else:
            sorted_players = []
            cur = conn.cursor()
            cur.execute(f"select * from player order by {attribute} desc")
            rows = cur.fetchall()
            for row in rows:
                if row:
                    player = {'player_id': row[0], 'name': row[1], 
                            'age': row[2], 'nationality': row[3], 
                            'team': row[4], 'position': row[5], 
                            'league': row[6], 'image' : row[7]}
                    sorted_players.append(player)
            return sorted_players

# Access entire data in the table
api.add_resource(League, '/leagues/')
api.add_resource(Team,   '/teams/')
api.add_resource(Player, '/players/')

# Access individual data in the table
api.add_resource(AccessLeague, '/leagues/<string:name>')
api.add_resource(AccessTeam,   '/teams/<string:name>')
api.add_resource(AccessPlayer, '/players/<string:name>')

# Sort data from table in ascending and descending order by attribute
api.add_resource(SortLeague, '/leagues/<string:attribute>/<string:sort_type>')
api.add_resource(SortTeam, '/teams/<string:attribute>/<string:sort_type>')
api.add_resource(SortPlayer, '/players/<string:attribute>/<string:sort_type>')

# api.add_resource(AccessLeague, '/leagues/<int:league_id>')
# api.add_resource(AccessTeam,   '/teams/<int:team_id>')
# api.add_resource(AccessPlayer, '/players/<int:player_id>')

if __name__ == '__main__':
    app.run(debug=True)

