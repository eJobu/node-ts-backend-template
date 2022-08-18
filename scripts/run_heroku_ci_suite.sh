#! bin/bash
set -e; # Abort if any of the commands fail
eslint ./src;
bash ./scripts/setup_test_db_heroku.sh;
mocha -r ts-node/register -r tsconfig-paths/register './src/**/*.spec.{js,ts}' --exit --timeout 60000 --retries 2;
