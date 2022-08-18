import Router from 'koa-router'

const sampleRoutes = new Router()

sampleRoutes.get('/', async ctx => {
  try {
    ctx.status = 200
    ctx.body = 'Welcome to this sample route'
  } catch (error) {
    ctx.throw(error.message, 401)
  }
}
)

export { sampleRoutes }
