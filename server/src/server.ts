import Koa from 'koa'
import Router from './routes';


  class Server {
      public server;
      public router;

      constructor() {
          this.server = new Koa();
          this.router = new Router()

          this.server.use(this.router.router.routes())
      }


      public startServer(port): void {
            this.server.listen(port, () => {
                console.log(`running server on port ${port}`)
            })
      }
  }
  

const app: Server = new Server();
app.startServer(3000)





