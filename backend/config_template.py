from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

# make user, pw, use whatever host, whether specific or localhost as shown, and then make db name
# then simply place those in the specific holders and you can run
SQLALCHEMY_DATABASE_URI = 'postgresql://postgres:JpL|D?3~zVQ{E6.R@34.66.21.52:5432/db'
engine = create_engine(SQLALCHEMY_DATABASE_URI)
SessionLocal = sessionmaker(engine)
