import Router from 'koa-router'
import { sampleRoutes } from './sampleRoute'

const AppRoutes = new Router()

AppRoutes.get('/', async ctx => {
  ctx.body = { status: 200, message: '👋 Welcome to EXPENSA' }
})
AppRoutes.use('/admin/support', sampleRoutes.routes(), sampleRoutes.allowedMethods())

export { AppRoutes }
