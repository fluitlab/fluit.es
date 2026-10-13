# Capa de comandos común a todos los repos (ver manual-estilo/07-comandos.md).
# Requiere just:  winget install Casey.Just
#
# Esta capa SOLO delega: la lógica vive en package.json.

# powershell.exe (no pwsh): viene en todo Windows, PowerShell 7 no se puede dar por hecho.
set windows-shell := ["powershell.exe", "-NoProfile", "-Command"]

# Lista las recetas disponibles
default:
    @just --list

# Instala dependencias
install:
    pnpm install

# Instala con el lockfile congelado (lo usa el CI)
install-ci:
    pnpm install --frozen-lockfile

# Servidor de desarrollo
dev:
    pnpm dev

# Build de producción
build:
    pnpm build

# Previsualiza el build de producción
preview:
    pnpm preview

# Linter
lint:
    pnpm lint

# Linter con autofix
lint-fix:
    pnpm lint:fix

# Busca código muerto (ficheros, exports y dependencias sin usar)
knip:
    pnpm knip

# Ojo: "pnpm run ci", no "pnpm ci". "ci" es un comando reservado de pnpm y no
# ejecuta el script del package.json (falla con ERR_PNPM_CI_NOT_IMPLEMENTED).

# Lint + knip + build: lo mismo que ejecuta GitHub Actions
ci:
    pnpm run ci

# Borra artefactos de build
[windows]
clean:
    foreach ($p in 'dist', 'node_modules/.vite') { if (Test-Path $p) { Remove-Item -Recurse -Force $p } }

[unix]
clean:
    rm -rf dist node_modules/.vite
