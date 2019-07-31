#!/bin/bash
read -e -p "Commit message: " desc  

# Python scripts
cd ./venv
source Scripts/activate
cd ..
python convert_json.py
python convert_md.py

# Git
git commit -am "$desc"
git push origin master

read -p "all set: press enter to continue"