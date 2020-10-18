DOCKER ?= docker-compose

build:
	docker-compose down
	docker-compose build --no-cache
	docker-compose up -d

down:
	docker-compose down
