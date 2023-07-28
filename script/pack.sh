#!/bin/bash
webpack ./dist/index.js --output-filename index.min.js \
  --target='node' \
  --mode='production'
