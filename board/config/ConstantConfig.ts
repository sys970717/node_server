class ConstatntsConfig {
    public configure: {
        dev: '/Users/sys970717/Desktop/Application/practice/node_server',
        prod: ''
    }

    public static bootstrap(): Object {
        return ConstatntsConfig
    }

    constructor() {
        this.configure = {
            dev: '/Users/sys970717/Desktop/Application/practice/node_server',
            prod: ''
        }
    }
}

export default ConstatntsConfig