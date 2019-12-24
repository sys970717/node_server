import { Entity, Column, PrimaryColumn } from 'typeorm'

@Entity()
export class ScrapingExchangeRateEntity {
    // 환율 변경 타입
    @PrimaryColumn({
        length: 10
    })
    type: string
    // 시간
    @PrimaryColumn({
        length: 20
    })
    datetime: string

    // 매매기준율 ( % )
    @Column("decimal", { precision: 8, scale: 2 })
    basePrice: 'number'

    // 시작가
    @Column("decimal", { precision: 8, scale: 2 })
    openingPrice: 'number'

    // 하한가
    @Column("decimal", { precision: 8, scale: 2 })
    lowPrice: 'number'
    
    // 상한가
    @Column("decimal", { precision: 8, scale: 2 })
    highPrice: 'number'

    // 환전 수수료
    @Column("decimal", { precision: 8, scale: 2 })
    exchangeCommission: 'number'

    // 전일대비 ( % ) 
    @Column("decimal", { precision: 8, scale: 2 })
    changePrice: 'number'

    // 현찰 살 때
    @Column("decimal", { precision: 8, scale: 2 })
    cashBuyingPrice: 'number'

    // 현찰 팔 때
    @Column("decimal", { precision: 8, scale: 2 })
    cashSellingPrice: 'number'

    // 송금 보낼 때
    @Column("decimal", { precision: 8, scale: 2 })
    ttSellingPrice: 'number'

    // 송금 받을 때
    @Column("decimal", { precision: 8, scale: 2 })
    ttBuyingPrice: 'number'

    constructor() {
        
    }

}