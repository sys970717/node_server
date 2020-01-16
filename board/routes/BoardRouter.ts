import express from 'express'
import BoardController from '../controllers/BoardController'
import bodyParser from 'body-parser'

class BoardRouter {
    public router: express.Router

    constructor() {
        const bodyParserJson = bodyParser.json()
        console.log('Init > Board Router Loading')
        this.router = express.Router()

        let boardController = new BoardController()

        this.router.post('/write', bodyParserJson, boardController.write)
        this.router.get('/view', bodyParserJson, boardController.view)
    }
}

export default BoardRouter;