import { Request, Response } from 'express'
import { getRepository, Equal } from 'typeorm'
import uuid from '../util/CreateUUID'
import { XMLHttpRequest } from 'xmlhttprequest-ts'
import { ScrapingService } from '../services/ScrapingService'
import { ScrapingExchangeRateEntity } from '../entity/ScrapingExchangeRateEntity'

const exchangeReq = require('../util/exchangeRate.js')

const scrapingService = new ScrapingService(); 

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
          console.log(data);
          data = data[0];

          
          let scrapingExchangeRateData = {
            type: data.code.substring(data.code.lastIndexOf('.')+1),
            currencyName: data.currencyName,
            datetime: `${data.date} ${data.time}`,
            basePrice: data.basePrice,
            openingPrice: data.openingPrice,
            highPrice: data.highPrice,
            lowPrice: data.lowPrice,
            exchangeCommission: data.exchangeCommission,
            changePrice: data.changePrice,
            cashBuyingPrice: data.cashBuyingPrice,
            cashSellingPrice: data.cashSellingPrice,
            ttSellingPrice: data.ttSellingPrice,
            ttBuyingPrice: data.ttBuyingPrice
          };
          
          scrapingService.addInstance(scrapingExchangeRateData);

          res.status(200).json(data)
        });
    }
}

export default ScrapingController;