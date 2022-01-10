#!/bin/sh
docker stop simplemodbot-dash -t 0
echo Stopped SimpleModBot-dash. | lolcat
docker build -t simplemodbot-dash .
echo Build complete. | lolcat
docker-compose up