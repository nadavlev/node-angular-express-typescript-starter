import express from 'express';

class MemberRout {
    public router = express.Router();
    constructor() {
        this.initRoutes();
    }
    private initRoutes() {
        this.router.get('/memberHome', (req, res) => {
            res.send('Hello Member Home');
        });
    }
}

export default MemberRout;
