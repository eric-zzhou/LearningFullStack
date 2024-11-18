#!/bin/bash

# Load environment variables from the .env file
export $(cat .env | xargs)

psql -h $DB_HOST -U postgres -d postgres -c "CREATE DATABASE \"$TARGET_DB\";"

# # Grant all privileges on the database to the user
# echo "Granting privileges to user 'postgres'..."
# psql -h $DB_HOST -U postgres -d postgres -c "
# GRANT ALL PRIVILEGES ON DATABASE \"$TARGET_DB\" TO postgres;
# ALTER ROLE postgres CREATEDB;
# ALTER ROLE postgres CREATEROLE;
# "

echo "Database and permissions set successfully."
