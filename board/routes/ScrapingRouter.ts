import express from 'express'
import ScrapingController from '../controllers/ScrapingController'
import bodyParser from 'body-parser'

class ScrapingRouter {
    public router: express.Router
    
    constructor() {
        const bodyParserForJson = bodyParser.json()
        console.log('Init > User Router Loading!!')
        this.router = express.Router()

        var scrapingController = new ScrapingController()
           
        this.router.get('/exchangeRate/:data', bodyParserForJson, scrapingController.getExchangeRate)
        // this.router.post('/create', bodyParserForJson, scrapingController.signUp)
        // this.router.post('/login', bodyParserForJson, scrapingController.signIn)
    }    
}

export default ScrapingRouter