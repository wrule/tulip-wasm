#!/bin/bash
emcc -O3 tulipx/tulipx.c tulipx/tiamalgamation.c -o src/tulipx.js \
  -s SINGLE_FILE=1 \
  -s MODULARIZE=1 \
  -s EXPORT_NAME='tulipx' \
  -s ALLOW_MEMORY_GROWTH=1 \
  -s EXPORTED_FUNCTIONS='[
    "_push",
    "_pop",
    "_inputs",
    "_options",
    "_outputs",
    "_inputs_map",
    "_outputs_offset",
    "_run",
    "_run_batch",
    "_erase_batch"
  ]'
