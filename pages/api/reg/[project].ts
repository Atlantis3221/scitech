import { NextApiRequest, NextApiResponse } from "next";
import Controller from "../../../services/controller";
import { MongoService } from "../../../services/mongo";
import { addToSendpulse } from "../sendpulse";


export default async (req:NextApiRequest, res:NextApiResponse) => { 
    const controller = new Controller(req, res)
    const project = req.query.project as string
    await MongoService.init()
    try {
        if (req.method === "POST") {
            const data = await MongoService.db.collection("regs").insertOne({
                ...req.body,
                project
            })
            addToSendpulse(req.body)
            controller.ok(data)
            return
        }
        if (req.method === "GET") {
            const data = await MongoService.db.collection("regs").find(controller.getSearchQuery()).sort(controller.sort).limit(controller.limit).skip(controller.skip).toArray()
            controller.ok(data)
            return
        }
    }
    catch (e) {
        controller.error(e.message)
    }
}