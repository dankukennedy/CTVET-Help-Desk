# Variables
DOCKER_COMPOSE = docker-compose
API_CONTAINER = help-desk-api

.PHONY: up down restart logs db-sync db-migrate build

# Start the containers in detached mode
up:
	$(DOCKER_COMPOSE) up -d

# Stop and remove containers
down:
	$(DOCKER_COMPOSE) down

# Rebuild and start
restart:
	$(DOCKER_COMPOSE) down
	$(DOCKER_COMPOSE) up -d --build

# View logs for the NestJS API
logs:
	$(DOCKER_COMPOSE) logs -f api

# Push the Prisma schema to the database (Best for development)
db-sync:
	docker exec -it $(API_CONTAINER) npx prisma db push

# Run migrations (Best for production-like testing)
db-migrate:
	docker exec -it $(API_CONTAINER) npx prisma migrate dev

# Open a shell inside the API container
shell:
	docker exec -it $(API_CONTAINER) sh