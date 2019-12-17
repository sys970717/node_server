import { Entity, Column, PrimaryColumn } from 'typeorm'

@Entity()
export class UserInfo {
    @PrimaryColumn({
        length: 50
    })
    email: string

    @Column({
        length: 100
    })
    auth_key: string

    @Column({
        length: 20
    })
    user_pw: string

    @Column({
        length: 10
    })
    user_nm: string

    regExpEmail: RegExp
    regExpUserPw: RegExp
    regResult: Object

    constructor() {
        this.regExpEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
        this.regExpUserPw = /^.*(?=^.{8,20}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/
        this.regResult = {
            type: String,
            result: Boolean,
            msg: String
        }
    }

    public isValidEmail = () => {
        let resultJson = this.regResult
        if (this.email === '' || !this.regExpEmail.test(this.email)) {
            resultJson = {
                type: 'email',
                result: false,
                msg: '이메일을 확인해주세요.'
            }
        } else {
            resultJson = {
                type: 'email',
                result: true,
                msg: ''
            }
        }

        return JSON.parse(JSON.stringify(resultJson))
    }

    public isValidPw = () => {
        let resultJson = this.regResult
        console.log(this.regExpUserPw.test(this.user_pw))
        if (this.user_pw === '' || !this.regExpUserPw.test(this.user_pw)) {
            resultJson = {
                type: 'user_pw',
                result: false,
                msg: '암호를 확인해주세요.'
            }
        } else {
            resultJson = {
                type: 'user_pw',
                result: true,
                msg: ''
            }
        }

        return JSON.parse(JSON.stringify(resultJson))
    }
}