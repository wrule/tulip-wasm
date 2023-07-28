#!/bin/bash
cd tulipx && ./print.sh > ../src/indicators.json
cd .. && ts-node script/corrector.ts src/indicators.json
