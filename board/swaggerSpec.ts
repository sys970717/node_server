import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import * as fs from 'fs'
import * as path from 'path'

// Swagger Definition
// You can set every attribute except paths and swagger
//  https://github.com/swagger-api/swagger-spec/blob/master/versions/2.0.md

class swaggerSpec {
    public options: swaggerJSDoc.Options
    public jsdoc: swaggerUi.JsonObject
    public jsonFile: swaggerJSDoc.SwaggerDefinition

    constructor() {
        // Swagger 설정 파일 읽어오기.
        var fileData = fs.readFileSync(path.join(__dirname, './swaggerDoc.json'), 'utf8')
        this.jsonFile = JSON.parse(fileData)

        this.options = {
            swaggerDefinition: this.jsonFile,
            apis: ['./routes/*.ts'] // api 파일 위치들
        }

        this.jsdoc = swaggerJSDoc(this.options)
    }
}

export default swaggerSpec