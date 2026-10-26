@echo off
title Bot Ruche ^& Outils
cd /d "%~dp0"
where node >nul 2>nul || (echo Node.js n'est pas installe : telecharge-le sur https://nodejs.org puis relance ce fichier. & pause & exit /b)
if not exist ".env" (copy ".env.example" ".env" >nul & echo Le fichier .env vient d'etre cree : ouvre-le, remplis DISCORD_TOKEN et DISCORD_CLIENT_ID, puis relance. & notepad ".env" & pause & exit /b)
echo Verification des dependances...
call npm install --omit=dev --no-audit --no-fund --loglevel=error
node src/index.js
pause
