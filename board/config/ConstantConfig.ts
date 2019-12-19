class ConstatntsConfig {
    public configure: {
        dev: '',
        prod: ''
    }

    public static bootstrap(): Object {
        return ConstatntsConfig
    }

    constructor() {
        this.configure = {
            dev: '',
            prod: ''
        }
    }
}

export default ConstatntsConfig