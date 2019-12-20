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
import {env} from 'process'

class Routes {
    public router: express.Router
    
    constructor() {
        console.log('Init Router Loading!!')
        this.router = express.Router()

        this.router.use(cors())

        const CONSTANT_CONFIG = new ConstatntsConfig().configure;
        let rootPath = CONSTANT_CONFIG.dev
        fs.readFile(rootPath+'/board/ormconfig.json', 'utf8', (err, option) => {
            if(err) {
                console.error('cause error ', err)
            }
            let connectionMetaData = JSON.parse(option);
            let DB_INFO = JSON.parse(JSON.stringify(CONSTANT_CONFIG.DB_INFO));
            console.log(DB_INFO.dev.DB_ACCOUNT);
            connectionMetaData.username = env.DB_ACCOUNT || DB_INFO.prod.DB_ACCOUNT;
            connectionMetaData.password = env.DB_PASSWORD || DB_INFO.prod.DB_PASSWORD;
            connectionMetaData.host = env.DB_HOST || DB_INFO.prod.DB_HOST;

            createConnection(connectionMetaData).then(connection => {
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