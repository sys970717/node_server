import { Request, Response } from 'express'

class BoardController {
    public ddd: string
    
    constructor() {
        
    }

    public write = async(req: Request, res: Response) => {
        console.log('write');
    }

    public view = async(req: Request, res: Response) => {
        // OAuth2.0
        if(req.headers.authorization)
        res.json({
            'id': req.param('id')
        });
    }
}

export default BoardController;