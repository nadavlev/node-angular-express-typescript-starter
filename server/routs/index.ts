import express from 'express';

class IndexRout {
    public router = express.Router();
    constructor() {
        this.initRoutes();
    }
    private initRoutes() {
        this.router.get('/', (req, res) => {
            res.send('Hello index');
        });
    }
}

export default IndexRout;
