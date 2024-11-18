from sqlalchemy import create_engine, text
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.exc import SQLAlchemyError
import dotenv
import os

# Load environment variables from .env file
dotenv.load_dotenv()

# Accessing the database credentials from environment variables
DB_PASSWORD = os.getenv("DB_PASSWORD")
DB_HOST = os.getenv("DB_HOST")
DB_PORT = os.getenv("DB_PORT")
TARGET_DB = os.getenv("TARGET_DB")

# Connect to the PostgreSQL server using the default "postgres" user
URL_DATABASE = f"postgresql://postgres:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{TARGET_DB}"

engine = create_engine(URL_DATABASE)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()
