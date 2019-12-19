import { Request, Response } from 'express'
import { getRepository, Equal } from 'typeorm'
import uuid from '../util/CreateUUID'
const exchangeReq = require('../util/exchangeRate.js');

class ScrapingController {
    constructor() {

    }

    public getExchangeRate = async function (req: Request, res: Response) {
        let bodyOption = req.params.data;
      
        // 날씨 취득하기
        let options = {
          url: 'https://quotation-api-cdn.dunamu.com',
          path: '/v1/forex/recent',
          params: `?codes=FRX.${bodyOption}`
        }
      
        exchangeReq(options).then(( data: JSON) => {
          let rateData = data;
          console.log(new uuid().tokens)
        //   client.hset(uuidToken.getToken(), date.yyyymmddHHmiss().substring(0,8), JSON.stringify(data));
          res.status(200).send(JSON.stringify(data))
        });
    }
}

export default ScrapingController;