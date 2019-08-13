#!/bin/bash
# Pause on error
set -e

err_report() {
    echo "Error on line $1"
    read -p "ERROR: press enter to continue"
}

trap 'err_report $LINENO' ERR

# Git
read -e -p "Commit message: " desc
git pull

# Python scripts
echo Start to update
cd ./venv
source Scripts/activate
cd ..
python changing_encoding.py
python sort.py
python convert_json.py
python convert_md.py
python combine.py
echo Updated

# Git
git commit -am "$desc"
git push origin master

read -p "all set: press enter to continue"