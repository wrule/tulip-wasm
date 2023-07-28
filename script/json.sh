#!/bin/bash
mkdir -p dist
gcc tulipx/print.c tulipx/tiamalgamation.c -o dist/print
./dist/print > src/indicators.json
rm dist/print
ts-node src/corrector.ts src/indicators.json
