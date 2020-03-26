#!/bin/bash
path=../src/templates/$1
lower=`echo $1 | tr '[:upper:]' '[:lower:]'`
mkdir -p $path

touch $path/$1.scss
sed -e "s/COMPONENT_NAME/$lower/g" ./snippets/Snippet.scss > $path/$1.scss


touch $path/$1.js
sed -e "s/COMPONENT_NAME/$1/g" -e "s/COMPONENT_LOWER/$lower/g" ./snippets/Snippet.js > $path/$1.js


touch $path/$1.md
sed -e "s/COMPONENT_NAME/$1/g" ./snippets/Snippet.md > $path/$1.md

touch $path/$1.test.js
sed -e "s/COMPONENT_NAME/$1/g" -e "s/COMPONENT_LOWER/$lower/g" ./snippets/Snippet.test.js > $path/$1.test.js

touch $path/index.js
sed -e "s/COMPONENT_NAME/$1/g" ./snippets/index.js > $path/index.js