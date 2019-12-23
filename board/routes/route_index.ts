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
        console.log('Init Router Loading!!');
        this.router = express.Router();

        this.router.use(cors())

        const CONSTANT_CONFIG = new ConstatntsConfig().configure;
        let rootPath = CONSTANT_CONFIG.CONFIG_DIR
        fs.readFile(rootPath+'ormconfig.json', 'utf8', (err, option) => {
            if(err) {
                console.error('cause error ', err)
            }
            let connectionMetaData = JSON.parse(option);
            let DB_INFO = JSON.parse(JSON.stringify(CONSTANT_CONFIG.DB_INFO));

            console.log('asdf ', DB_INFO.prod.DB_HOST);
            connectionMetaData.username = DB_INFO.prod.DB_ACCOUNT || DB_INFO.dev.DB_ACCOUNT;
            connectionMetaData.password = DB_INFO.prod.DB_PASSWORD || DB_INFO.dev.DB_PASSWORD;
            connectionMetaData.host = DB_INFO.prod.DB_HOST || DB_INFO.dev.DB_HOST;
            connectionMetaData.port = DB_INFO.prod.DB_PORT || DB_INFO.dev.DB_PORT;
            connectionMetaData.database = DB_INFO.prod.DB_NAME || DB_INFO.dev.DB_NAME;

            console.log('INFO : ', connectionMetaData);

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