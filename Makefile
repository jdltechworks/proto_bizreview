setup_local:
	pip install -r requirements/base.txt
	pip install -r requirements/local.txt
	cp env.example.com .env

setup_prod:
	pip install -r requirements/base.txt
	pip install -r requirements/production.txt
	cp env.example.com .env

run:
	python manage.py runserver
