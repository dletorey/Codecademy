#!/bin/bash
echo "Hello user this script is gonna do stuff for you"
firstline=$(head -n 1 source/changelog.md)
echo $firstline 
read -a splitfirstline <<< $firstline
version=${splitfirstline[1]} 
echo $version
# project url https://www.codecademy.com/paths/web-development/tracks/learn-the-command-line/modules/bash-scripting/projects/bash-scripting-p
