# Change with your postgres user, password and DB name
DATABASE_URL=postgresql://{USERNAME}:{PASSWORD}@localhost/{DATABASE}
