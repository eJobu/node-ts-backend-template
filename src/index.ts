import { nodeEnv } from 'util/env'
import logger from 'util/logger'
import { app } from './app'
import { createPostgresConnection } from './models/typeorm'
require('dotenv').config()

async function launchApp (): Promise<string> {
  if (!nodeEnv) {
    logger.error('Node Env was not specified')
    process.exit(1)
  }
  logger.info(`[SERVER-${nodeEnv}]: Launching the App ... `)
  try {
    await createPostgresConnection()
    logger.info('[TYPEORM]: Connected to the database')
  } catch (error) {
    logger.error(`[TYPEORM]: Could not connect to database due to ${error.message}`)
    throw error
  }
  const server = app.listen(process.env.PORT, (): void => {
    logger.info(`[SERVER]: The app is being served on port ${process.env.PORT}`)
  })

  server.setTimeout(30 * 1000)
  return 'Server is running'
}

launchApp().then(logger.info)
  .catch((err): void => {
    logger.error(err.message)
    process.exit(1)
  })
