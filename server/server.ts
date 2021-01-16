import express from 'express';
import cookieParser from "cookie-parser";
import * as path from "path";
import IndexRout from "./routs";
import MemberHomeRout from "./routs/member.home";
import {config} from "./config.env";

export const port = config.port || 4000;

class Server {
    private app: express.Application = express();
    constructor() {
        this.loadMiddleWare();
        this.loadRouts();
    }

    private loadMiddleWare() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
        this.app.use(cookieParser());
        this.app.use(express.static(path.join(__dirname, '../../build/client')));
    }

    private loadRouts() {
        const indexRout: IndexRout = new IndexRout();
        const memberHomeRout: MemberHomeRout = new MemberHomeRout();

        this.app.use(indexRout.router);
        this.app.use(memberHomeRout.router);
    }

    public listen(port: any) {
        this.app.listen(port ,() => {
            console.log(`Server in listening on port ${port}`);
        })
    }
}

export const server = new Server();
server.listen(port);
