#!/usr/local/bin/bash
for file in *.html; do
  if [[ $file != "alabama.html" ]]; then
    grep -v "<a>" $file | grep -v "<a style" | grep -v "^function" | grep -v "^document" | grep -v "^<span" | sed '32,43d' > tmp
    mv tmp $file
  fi
done
