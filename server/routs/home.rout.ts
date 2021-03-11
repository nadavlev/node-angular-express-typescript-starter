import express from 'express';
import * as path from "path";


class HomeRout {
    public router = express.Router();
    public path: string = '/home';
    constructor() {
        this.initRoutes();
    }
    private initRoutes() {
        this.router.get(this.path, (req, res) => {
            res.send('Hello from home');
        });
    }
}

export default HomeRout;
