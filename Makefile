.PHONY: dev build lint preview deploy knip check help

# Default target
help:
	@echo "Available commands:"
	@echo "  make dev      - Start development server"
	@echo "  make build    - Build for production"
	@echo "  make lint     - Run ESLint"
	@echo "  make knip     - Run Knip to find unused files/exports"
	@echo "  make check    - Run both lint and knip"
	@echo "  make deploy   - Deploy to GitHub Pages"
	@echo "  make preview  - Preview production build locally"

dev:
	npm run dev

build:
	npm run build

lint:
	npm run lint

knip:
	npm run knip

check: lint knip

deploy:
	npm run deploy

preview:
	npm run preview
