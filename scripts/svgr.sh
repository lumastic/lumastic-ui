#!/bin/bash 

for iconPath in ../src/icons/*; do 
  if [ -d "$iconPath" ]; then
  # GET ICON NAME
  name=$(basename $iconPath)
  echo "Found icon: $name"
  # RUN svgr ON SVG IN THE DIRECTORY
  echo "Running svgr on $name.svg"
  # CREATE index.js FOR REACT COMPONENT
  echo "Creating index.js for $name.js"
  echo "-------------------------------------"
  fi
done