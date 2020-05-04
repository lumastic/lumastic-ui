#!/bin/bash
paths=(../src/components ../src/templates ../src/views ../src/layouts ../src/forms)
for path in ${paths[@]}; do 
  > $path/index.js
  for d in "$path"/*/; do
    base=$(basename "${d}")
    export=$(echo export { $base } from \"./${base}\"\;)
    echo "${export}" >> $path/index.js
  done
done

