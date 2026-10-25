#!/usr/bin/env sh
cd "$(dirname "$0")"
[ -f .env ] || { cp .env.example .env; echo "Remplis le fichier .env puis relance."; exit 1; }
[ -d node_modules ] || npm install --omit=dev
exec node src/index.js
