import express from 'express'
import Routes from './routes/route_index'

class App {
    public app: express.Application
    /**
     * @ class App
     * @ method init
     */

     public static bootstrap(): App {
         return new App()
     }

    constructor() {
        this.app = express()
        const router = new Routes();

        this.app.use('/', router.router)
    }
}

export default App