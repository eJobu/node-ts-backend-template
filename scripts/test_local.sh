#!/bin/bash
red=$'\e[1;31m' # Error
grn=$'\e[1;32m' # Success
yel=$'\e[1;33m' # Warnings
blu=$'\e[1;34m' # Info
mag=$'\e[1;35m'
cyn=$'\e[1;36m'
end=$'\e[0m'
set -e

printf "${yel}eJobu: Running Tests...${end}\n"

printf "${yel}eJobu: (1/2) | Linting...${end}\n"
node_modules/.bin/eslint ./src --ext ts --quiet --fix
printf "${grn}\nLinting Complete.${end}\n"

TEST_PATH=$1
source src/util/test_utils/.env
printf "\n${yel}eJobu: (2/2) | Running Tests...${end}\n"
if [ -n "$TEST_PATH" ];
  then node_modules/.bin/mocha --watch -r ts-node/register -r tsconfig-paths/register  $TEST_PATH;
  else node_modules/.bin/mocha --watch -r ts-node/register -r tsconfig-paths/register './src/**/*.spec.{js,ts}';
fi
exit 0
