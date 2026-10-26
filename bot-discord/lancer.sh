#!/usr/bin/env sh
cd "$(dirname "$0")"
[ -f .env ] || { cp .env.example .env; echo "Remplis le fichier .env puis relance."; exit 1; }
npm install --omit=dev --no-audit --no-fund --loglevel=error
exec node src/index.js
