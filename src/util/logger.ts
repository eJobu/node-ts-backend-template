import { createLogger, format, transports } from 'winston'

const LOG_LEVEL = process.env.LOG_LEVEL || 'info'

const logger = createLogger(
  {
    transports: [
      new transports.Console(
        {
          level: LOG_LEVEL,
          format: format.json(),
          silent: false
        }
      )
    ]
  }
)

export default logger
