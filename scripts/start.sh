source .env
ECHO NODE_ENV="PRODUCTION"
npm run build
npm run start
print "Started server"