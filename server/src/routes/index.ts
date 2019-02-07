import KoaRouter from 'koa-router';

export default class Router {
    public router;

    constructor() {
        this.router = new KoaRouter()

        this.router.get('/', async (ctx) => {
            ctx.body = "Hello World"
        })

        this.router.get('/:name', async (ctx) => {
            ctx.body = `welcome ${ctx.params.name}`
        })
    }
}


