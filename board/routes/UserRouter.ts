import express from 'express'
import UserController from '../controllers/UserContorller'
import bodyParser from 'body-parser'

class UserRouter {
    public router: express.Router
    
    constructor() {
        const bodyParserForJson = bodyParser.json()
        console.log('Init > User Router Loading!!')
        this.router = express.Router()

        var usersController = new UserController()
           
        this.router.get('/list', bodyParserForJson, usersController.getUserList)
        this.router.post('/create', bodyParserForJson, usersController.signUp)
        this.router.post('/login', bodyParserForJson, usersController.signIn)
    }    
}

export default UserRouter