import { Request, Response } from 'express'
import { getRepository, Equal } from 'typeorm'
import uuid from '../util/CreateUUID'
import { XMLHttpRequest } from 'xmlhttprequest-ts'
const exchangeReq = require('../util/exchangeRate.js')

class ScrapingController {
    constructor() {

    }

    public getExchangeRate = function (req: Request, res: Response) {
        let bodyOption = req.params.data;
      
        // 날씨 취득하기
        let options = {
          url: 'https://quotation-api-cdn.dunamu.com',
          path: '/v1/forex/recent',
          params: `?codes=FRX.${bodyOption}`
        }
      
        exchangeReq(options).then((response: any) => {
          let {data} = response;
          // console.log(new uuid().tokens);
          // client.hset(uuidToken.getToken(), date.yyyymmddHHmiss().substring(0,8), JSON.stringify(data));
          console.log(data);
          data = data[0];

          let exprotData = {
            currencyName: data.currencyName,
            datetime: data.date+data.time,
            '매매기준율': data.basePrice,
            openingPrice: data.openingPrice,
            highPrice: data.highPrice,
            lowPrice: data.lowPrice,
            '수수료': data.exchangeCommission,
            '전일대비': data.changePrice

          };

          console.log(exprotData)

          res.status(200).json(data)
        });
    }
}

export default ScrapingController;