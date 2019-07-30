#!/bin/bash
read -e -p "Commit message: " desc  

# Python scripts
source ./venv/bin/activate
python update_data.py

# Git
git commit -am "$desc"
git push origin master

read -p "all set: press enter to continue"