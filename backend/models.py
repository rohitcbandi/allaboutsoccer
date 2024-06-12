from sqlalchemy import Column, Integer, String, Float
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class Teams(Base):
    __tablename__ = 'teams'
    team_id = Column(String, primary_key=True)
    name = Column(String)
    country = Column(String)
    league = Column(String)
    venue = Column(String)
    city = Column(String)
    top_players = Column(String)
    image = Column(String)

class Player(Base):
    __tablename__ = 'player'
    player_id = Column(String, primary_key=True)
    name = Column(String)
    age = Column(String)
    nationality = Column(String)
    team = Column(String)
    position = Column(String)
    league = Column(String)
    image = Column(String)

class League(Base):
    __tablename__ = 'league'
    league_id = Column(String, primary_key=True)
    name = Column(String)
    country = Column(String)
    teams = Column(String)
    top_scorer = Column(String)
    top_assists = Column(String)
    image = Column(String)