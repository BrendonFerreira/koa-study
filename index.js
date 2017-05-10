const Koa = require('koa')
const app = new Koa()
const router = require('koa-router')
const routeConfig = router()

routeConfig.get('/', ctx => {
	ctx.body = "Main page <a href='/not-found'>Not found</a>"
	ctx.set('Content-Type', 'text/html')
})

routeConfig.get('/not-found', ctx => {
	ctx.body = "Page not found"
})

app.use(routeConfig.routes())
app.use(routeConfig.allowedMethods())

app.listen(3000)