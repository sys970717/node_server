import { getRepository, Equal } from 'typeorm'
import { ScrapingExchangeRateEntity }  from '../entity/ScrapingExchangeRateEntity'

export class ScrapingService {
    constructor() {
        console.log('ScrapingService loading');
    }

    public addInstance = async function (data: Object) {
        try {
            let entity = new ScrapingExchangeRateEntity();
            let gettingJson = JSON.parse(JSON.stringify(data));
            
            entity.type = gettingJson.type;
            entity.datetime = gettingJson.datetime;
            entity.basePrice = gettingJson.basePrice;
            entity.openingPrice = gettingJson.openingPrice;
            entity.lowPrice = gettingJson.lowPrice;
            entity.highPrice = gettingJson.highPrice;
            entity.exchangeCommission = gettingJson.exchangeCommission;
            entity.changePrice = gettingJson.changePrice;
            entity.cashBuyingPrice = gettingJson.cashBuyingPrice;
            entity.cashSellingPrice = gettingJson.cashSellingPrice;
            entity.ttSellingPrice = gettingJson.ttSellingPrice;
            entity.ttBuyingPrice = gettingJson.ttBuyingPrice;

             
            return await getRepository(ScrapingExchangeRateEntity).save(entity) ? 'success' : new Error();
        } catch (err) {
            console.error(err);
            return 'fail';
        }
    }
}