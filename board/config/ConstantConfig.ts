class ConstatntsConfig {
    public configure: {
        dev: string,
        prod: string,
        DB_INFO: Object
    }

    public static bootstrap(): Object {
        return ConstatntsConfig
    }

    constructor() {
        this.configure = {
            dev: '/Users/sys970717/Desktop/Application/practice/node_server',
            prod: '',
            DB_INFO: {
                dev: {
                    DB_ACCOUNT: 'test',
                    DB_PASSWORD: 'test',
                    DB_HOST: '127.0.0.1'
                },
                prod: {
                    DB_ACCOUNT: 'test',
                    DB_PASSWORD: 'test',
                    DB_HOST: 'mysql8.cgdlxt0waf4p.ap-northeast-2.rds.amazonaws.com'
                }
            }
        }
    }
}

export default ConstatntsConfig