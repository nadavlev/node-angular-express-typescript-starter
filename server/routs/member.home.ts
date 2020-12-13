import express from 'express';

class MemberHomeRout {
    public router = express.Router();
    constructor() {
        this.initRoutes();
    }
    private initRoutes() {
        this.router.get('/api/memberHome', (req, res) => {
            res.send('Hello Member Home');
        });
    }
}

export default MemberHomeRout;
