#!/bin/bash
read -e -p "Commit message: " desc  
if [ -z "$desc" ]
then
    desc="Update README.md"
fi
git commit -am "$desc"
git push origin master

read -p "all set: press enter to continue"