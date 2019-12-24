import { Request, Response } from 'express'
import { getRepository, Equal } from 'typeorm'
import { UserInfo } from '../entity/UserInfo'
import ConstatntsConfig from '../config/ConstantConfig'
import fs from 'fs'
import { parse } from 'querystring'
import uuid from '../util/CreateUUID'

class UserController {
    public FORM_URLENCODING: string

    constructor() {
        this.FORM_URLENCODING = 'application/x-www-form-urlencoded'
        console.log('User Controller Loading!! ')
    }

    /**
     * getUserList
     */
    public getUserList = async (req: Request, res: Response) => {
        try {
            let list = await getRepository(UserInfo).find()
            res.json(list)
        } catch (e) {
            res.status(404).json({ message: e.message })
            throw new Error(e)
        }
    }

    /**
     * signUp 
     */
    public signUp = async (req:Request, res: Response) => {
        var reqInfoData = req.body
        const authKey = new uuid().tokens

        try {
            const userInfoEntity = new UserInfo()
            userInfoEntity.user_nm = reqInfoData.user_nm
            userInfoEntity.user_pw = reqInfoData.user_pw
            userInfoEntity.email = reqInfoData.email
            userInfoEntity.auth_key = authKey

            var validEmail = userInfoEntity.isValidEmail()
            var validPw = userInfoEntity.isValidPw()
    
            console.log(validPw)
            
            if (!validEmail.result) {
                res.status(403).json({'code': '403', 'msg': '가입하지 않은 이메일이거나, 잘못된 비밀번호입니다.'})
                return
            } else if(!validPw.result) {
                res.status(403).json({'code': '403', 'msg': '암호는 8 ~ 20자리, 영문자+숫자+특수기호(최소1개) 조합으로 생성하여 주시기 바랍니다.'})
                return
            } else {
                // Insert
                getRepository(UserInfo).save(userInfoEntity)
                res.status(200).send('회원가입을 축하합니다. 로그인하여 사용해주세요.')
            }
        } catch (e) {
            res.status(404).json({ message: e.message })
            throw new Error(e)
        }
    }

    /**
     * signIn
     */
    public signIn = async (req:Request, res: Response) => {
        var reqInfoData = req.body
        var user_info = new UserInfo()
        user_info.email = reqInfoData.email
        user_info.user_pw = reqInfoData.user_pw

        var validEmail = user_info.isValidEmail()
        var validPw = user_info.isValidPw()

        console.log(reqInfoData);
        
        if (!validEmail.result) {
            res.status(403).json({'code': '403', 'msg': '가입하지 않은 이메일이거나, 잘못된 비밀번호입니다.'})
            return
        } else if(!validPw.result) {
            res.status(403).json({'code': '403', 'msg': '가입하지 않은 이메일이거나, 잘못된 비밀번호입니다.'})
            return
        } else {
            try {
                await getRepository(UserInfo).findOne(
                {
                    email: Equal(user_info.email),
                    user_pw: Equal(user_info.user_pw)
                }).then((result) => {
                    // console.log('result > ', result)
                    res.status(200).json(result.auth_key)
                })
            } catch (err) {
                console.error('error ... > ', err)
                res.status(403).json({'code': '403', 'msg': '가입하지 않은 이메일이거나, 잘못된 비밀번호입니다.'})
            }
        }
    }
}

export default UserController