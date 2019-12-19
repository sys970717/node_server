import express from 'express'
import fs from "fs"
import { createConnection } from 'typeorm'
import ConstatntsConfig from '../config/ConstantConfig'
import swaggerUi from 'swagger-ui-express'
import swaggerSpec from '../swaggerSpec'
import UserRouter from './UserRouter'
import ScrapingRouter from './ScrapingRouter'
import cors from 'cors'

import path from 'path'

class Routes {
    public router: express.Router
    
    constructor() {
        console.log('Init Router Loading!!')
        this.router = express.Router()

        this.router.use(cors())

        var rootPath = new ConstatntsConfig().configure.dev
        fs.readFile(rootPath+'/board/ormconfig.json', 'utf8', (err, option) => {
            if(err) {
                console.error('cause error ', err)
            }
            createConnection(JSON.parse(option)).then(connection => {
                this.router.get("/", (req: express.Request, res: express.Response) => {
                    fs.readFile(rootPath + '/html/test_index.html', 'utf8', (err, data) => {
                        if(err) {
                            console.error('error log > ', err)
                        }
                        res.status(200)
                        res.type('text/html')
                        res.send(data)
                    })
                })

                this.router.use('/api-docs/', swaggerUi.serve, swaggerUi.setup(new swaggerSpec().jsdoc))
                
                this.router.use('/user', new UserRouter().router)
                this.router.use('/exchange', new ScrapingRouter().router)
            })
        })
    }    
}

export default Routes