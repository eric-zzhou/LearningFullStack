from sqlalchemy import create_engine, text
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.exc import SQLAlchemyError
import dotenv
import os

# Load environment variables from .env file
dotenv.load_dotenv()

# Accessing the database credentials from environment variables
DB_USER = os.getenv("DB_USER")
DB_PASSWORD = os.getenv("DB_PASSWORD")
DB_HOST = os.getenv("DB_HOST")
DB_PORT = os.getenv("DB_PORT")
DB_NAME = os.getenv("DB_NAME")

# Connect to the PostgreSQL server using the default "postgres" user
URL_DATABASE = "postgresql://postgres:postgres@172.24.93.181:5432/postgres"  # default postgres database

engine = create_engine(URL_DATABASE)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()


def create_database_and_permissions():
    try:
        # Connect to the PostgreSQL server to create the database and set permissions
        with engine.connect() as connection:
            # Check if the database exists, if not, create it
            result = connection.execute(
                text(
                    "SELECT 1 FROM pg_catalog.pg_database WHERE datname = 'QuizApplication';"
                )
            ).fetchone()

            if not result:
                connection.execute(
                    text(
                        """
                        CREATE DATABASE "QuizApplication";
                        """
                    )
                )
                print("Database 'QuizApplication' created successfully.")
            else:
                print("Database 'QuizApplication' already exists.")

            # Switch to the "QuizApplication" database to grant permissions
            connection.execute(
                text(
                    """
                    GRANT ALL PRIVILEGES ON DATABASE "QuizApplication" TO postgres;
                    ALTER ROLE postgres CREATEDB;
                    ALTER ROLE postgres CREATEROLE;
                    """
                )
            )

            print("Permissions granted successfully to the default 'postgres' user.")

    except SQLAlchemyError as e:
        print(f"An error occurred: {e}")
