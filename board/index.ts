import 'source-map-support/register' // source-map을 사용하기 위해 추가.
import App from './App'
import * as express from 'express'
import bodyParser from 'body-parser'

const port: number = Number(process.env.PORT || 3000)
const app: express.Application = new App().app

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.listen(port, function() {
    console.log(`Express server Listen ${port}`)
}).on('error', function(err) {
    console.error(err)
})