#! bin/bash
set -e

START=$(date +%s)

TEST_PATH=$1
source src/util/test_utils/.env

END=$(date +%s)
DIFF=$(( $END - $START ))
echo "Postgres setup took $DIFF seconds"

if [ -n "$TEST_PATH" ];
  then mocha -r ts-node/register -r tsconfig-paths/register --exit $TEST_PATH;
  else mocha -r ts-node/register -r tsconfig-paths/register --timeout 10000 --exit './src/**/*.spec.{js,ts}';
fi

END=$(date +%s)
DIFF=$(( $END - $START ))
echo "Ended testing it took $DIFF seconds"

exit 0
