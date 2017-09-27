# Environment type
LOCAL=True
DEBUG=True

# Change with your postgres user, password and DB name
DATABASE_URL=postgresql://{USERNAME}:{PASSWORD}@localhost/{DATABASE}
