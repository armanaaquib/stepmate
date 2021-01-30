#!/bin/sh

cd $(git rev-parse --show-toplevel) || exit 1

if [ $(./run backend_test) -ne 0 ]; then
  echo "backend tests are failing"
  exit 1
fi

if [ $(./run frontend_test) -ne 0 ]; then
  echo "frontend tests are failing"
  exit 1
fi
