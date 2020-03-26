#!/bin/bash
path=../src/icons/$1
lower=`echo $1 | tr '[:upper:]' '[:lower:]'`
mkdir -p $path

touch $path/$1.svg

touch $path/$1.js
sed -e "s/ICON_NAME/$1/g" ./iconSnippets/iconSnippet.js > $path/$1.js

touch $path/index.js
sed -e "s/ICON_NAME/$1/g" ./snippets/index.js > $path/index.js