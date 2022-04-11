up:
	docker-compose up -d
build:
	docker-compose build --no-cache --force-rm
init:
	docker-compose -f docker-compose.dev.yml build --no-cache --force-rm
	docker-compose -f docker-compose.dev.yml up -d
init-prod:
	docker-compose -f docker-compose.prod.yml build --no-cache --force-rm
	docker-compose -f docker-compose.prod.yml up -d
remake:
	@make destroy
	@make init
remake-prod:
	@make destroy
	@make init-prod
stop:
	docker-compose stop
down:
	docker-compose down --remove-orphans
restart:
	@make down
	@make up
destroy:
	docker-compose down --rmi all --volumes --remove-orphans
destroy-volumes:
	docker-compose down --volumes --remove-orphans
ps:
	docker-compose ps
logs:
	docker-compose logs
logs-watch:
	docker-compose logs --follow
log-web:
	docker-compose logs web
log-web-watch:
	docker-compose logs --follow web
log-app:
	docker-compose logs app
log-app-watch:
	docker-compose logs --follow app
web:
	docker-compose exec web ash
app:
	docker-compose exec app bash
npm:
	@make npm-install
npm-install:
	docker-compose exec app npm install
npm-dev:
	docker-compose exec app npm run dev
npm-build:
	docker-compose exec app npm run build
npm-preview:
	docker-compose exec app npm run preview