#!/bin/bash
echo "Hello user this script is gonna do stuff for you"
firstline=$(head -n 1 source/changelog.md)
echo $firstline 
read -a splitfirstline <<< $firstline
version=${splitfirstline[1]} 
echo $version
echo "do you need to make a change to the version (enter "1" for yes, "0" for no)"
read versioncontinue
if [ $versioncontinue -eq 1 ]
then
  for filename in source/*
  do
    # echo $filename
    if [ $filename == "source/secretinfo.md" ]
    then
      echo "Not copying " $filename
    else
      echo "Copying " $filename
      cp $filename build/.
    fi
  done
else
  echo "Please come back when you are ready"
fi
cd build
echo "Build version $version contains:"
ls
cd ..
# echo $versioncontinue
# project url https://www.codecademy.com/paths/web-development/tracks/learn-the-command-line/modules/bash-scripting/projects/bash-scripting-p
