from sqlalchemy_utils import database_exists, create_database
from config_template import engine, SQLALCHEMY_DATABASE_URI, SessionLocal
from models import Base
from crud import load_data_team, load_data_player, load_data_league, get_data_team, get_data_player, get_data_league
import os


if not database_exists(SQLALCHEMY_DATABASE_URI):
    create_database(SQLALCHEMY_DATABASE_URI)
Base.metadata.create_all(bind=engine)

directory = 'csv'

with SessionLocal() as db:
    for filename in os.listdir(directory): 
        with open(os.path.join(directory, filename), 'r', encoding='utf8') as f:
            if 'teams' in filename:
                load_data_team(db, f)
                data = get_data_team(db)
            elif 'players' in filename:
                load_data_player(db, f)
                data = get_data_player(db)
            elif 'league' in filename:
                load_data_league(db, f)
                data = get_data_league(db)
