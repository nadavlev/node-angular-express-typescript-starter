import express from "express";
import HomeRout from "./home.rout";
import MemberRout from "./member.rout";



export class ApiController {
    public path: string = '/api';
    public router = express.Router();
    private homeRout: HomeRout = new HomeRout();
    private memberRout: MemberRout = new MemberRout();


    constructor() {
        this.initRoutes();
    }

    private initRoutes() {
        this.router.use(this.homeRout.router);
        this.router.use(this.memberRout.router);
    }

}
