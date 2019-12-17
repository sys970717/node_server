class ConstatntsConfig {
    public configure: {
        dev: 'D:/PROJECT/1.게시판 프로젝트/server',
        prod: ''
    }

    public static bootstrap(): Object {
        return ConstatntsConfig
    }

    constructor() {
        this.configure = {
            dev: 'D:/PROJECT/1.게시판 프로젝트/server',
            prod: ''
        }
    }
}

export default ConstatntsConfig