import * as path from 'path';
import {config} from 'dotenv';
import {env} from 'process';

class ConstatntsConfig {
    public configure: {
        CONFIG_DIR: string,
        DB_INFO: Object
    }

    public static bootstrap(): Object {
        return ConstatntsConfig
    }

    constructor() {
        config();
        this.configure = {
            CONFIG_DIR: path.join(__dirname, '../'),
            DB_INFO: {
                dev: {
                    DB_ACCOUNT: 'test',
                    DB_PASSWORD: 'test',
                    DB_HOST: '127.0.0.1',
                    DB_PORT: '3306',
                    DB_NAME: 'test'
                },
                prod: {
                    DB_ACCOUNT: env.DB_ACCOUNT,
                    DB_PASSWORD: env.DB_PASSWORD,
                    DB_HOST: env.DB_HOST,
                    DB_PORT: env.DB_PORT,
                    DB_NAME: env.DB_NAME
                }
            }
        }
    }
}

export default ConstatntsConfig