setup:
	pip install -r requirements.txt
	cp env.example.com .env

run:
	python manage.py runserver
