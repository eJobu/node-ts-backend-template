import * as HttpStatus from 'http-status-codes'
import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import cors from 'koa-cors'
import json from 'koa-json'
import logger from 'koa-logger'
import { AppRoutes } from './routes/index'

require('dotenv').config()

const app:Koa = new Koa()

app.use(cors({}))
app.use(json())
app.use(logger())
app.use(bodyParser())

// Generic error handling middleware.
app.use(async (ctx: Koa.Context, next: () => Promise<any>) => {
  try {
    await next()
  } catch (error) {
    ctx.status = error.statusCode || error.status || HttpStatus.INTERNAL_SERVER_ERROR
    error.status = ctx.status
    ctx.body = { error }
    ctx.app.emit('error', error, ctx)
  }
})

// Routes
app.use(AppRoutes.routes())

// Application error logging.
app.on('error', console.error)

export { app }
