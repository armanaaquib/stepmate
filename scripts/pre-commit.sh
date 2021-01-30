#!/bin/sh

cd $(git rev-parse --show-toplevel) || exit 1

if ! ./run frontend_test; then
  echo "frontend tests are failing"
  exit 1
fi

if ! ./run backend_test; then
  echo "backend tests are failing"
  exit 1
fi
