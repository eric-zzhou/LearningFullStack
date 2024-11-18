#!/bin/bash

# Load environment variables from the .env file
export $(cat .env | xargs)

# Check if the database already exists
DB_EXISTS=$(psql -h $DB_HOST -U $DB_USER -d $DB_NAME -tAc "SELECT 1 FROM pg_database WHERE datname = '$TARGET_DB'")

if [ "$DB_EXISTS" != "1" ]; then
  echo "Database '$TARGET_DB' does not exist. Creating it now..."
  # Create the database
  PGPASSWORD=$DB_PASSWORD psql -h $DB_HOST -U $DB_USER -d $DB_NAME -c "CREATE DATABASE \"$TARGET_DB\";"
else
  echo "Database '$TARGET_DB' already exists."
fi

# Create a table in the new database (or ensure the table exists)
echo "Creating table 'questions' in the database..."
PGPASSWORD=$DB_PASSWORD psql -h $DB_HOST -U $DB_USER -d $TARGET_DB -c "
CREATE TABLE IF NOT EXISTS questions (
    id SERIAL PRIMARY KEY,
    question_text TEXT NOT NULL,
    answer TEXT NOT NULL
);"

# Grant all privileges on the database to the user
echo "Granting privileges to user '$TARGET_USER'..."
PGPASSWORD=$DB_PASSWORD psql -h $DB_HOST -U $DB_USER -d $DB_NAME -c "
GRANT ALL PRIVILEGES ON DATABASE \"$TARGET_DB\" TO $TARGET_USER;
ALTER ROLE $TARGET_USER CREATEDB;
ALTER ROLE $TARGET_USER CREATEROLE;
"

echo "Database, table, and permissions set successfully."
