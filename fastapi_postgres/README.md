# FastAPI Project

This is a FastAPI project that uses Postgres as the database. This follow the following [tutorial](https://www.youtube.com/watch?v=398DuQbQJq0)

## Setup
- python -m venv env
- source env/bin/activate
- pip install -r requirements.txt
    - pip install fastapi uvicorn sqlalchemy psycopg2-binary

## Windows WSL Linking
- sudo apt update && sudo apt install postgresql postgresql-contrib
- sudo -u postgres psql
    - \password postgres
    - \q
- sudo service postgresql start
    - sudo service postgresql status
- sudo nano /etc/postgresql/14/main/postgresql.conf
    - listen_addresses = '*'
- sudo nano /etc/postgresql/14/main/pg_hba.conf
    - host    all             all             0.0.0.0/0               md5
- sudo service postgresql restart
- ip addr show eth0


## Run
- uvicorn main:app --reload