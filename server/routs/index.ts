import express from 'express';
import * as path from "path";


class IndexRout {
    public router = express.Router();
    constructor() {
        this.initRoutes();
    }
    private initRoutes() {
        this.router.get('/api/index', (req, res) => {
            res.send('Hello from index');
        });
    }
}

export default IndexRout;
