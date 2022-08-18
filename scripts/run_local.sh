#! bin/bash
source .env
npm run build
heroku config:set NODE_ENV="local"
heroku local web
