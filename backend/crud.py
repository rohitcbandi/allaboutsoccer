from sqlalchemy.orm import Session
from models import Teams, Player, League
import pandas as pd

def load_data_team(db: Session, file_path: str):
    data = pd.read_csv(file_path)
    for row in data.itertuples():
        db_data = Teams(team_id = row.team_id, name=row.name,  country=row.country, league = row.league, venue=row.venue, city=row.city, top_players=row.top_players, image = row.image)
        db.add(db_data)
    db.commit()

def load_data_player(db: Session, file_path: str):
    data = pd.read_csv(file_path)
    for row in data.itertuples():
        db_data = Player(player_id = row.player_id, name=row.name, age=row.age, nationality=row.nationality, team=row.team, position=row.position, league=row.league, image = row.image)
        db.add(db_data)
    db.commit()

def load_data_league(db: Session, file_path: str):
    data = pd.read_csv(file_path)
    for row in data.itertuples():
        db_data = League(league_id = row.league_id, name=row.name, country=row.country, teams=row.teams, top_scorer=row.top_scorer, top_assists=row.top_assists, image=row.image)
        db.add(db_data)
    db.commit()

def get_data_team(db: Session):
    return db.query(Teams).all()

def get_data_player(db: Session):
    return db.query(Player).all()

def get_data_league(db: Session):
    return db.query(League).all()
