import { NextApiRequest, NextApiResponse } from "next";
import Controller from "../../../services/controller";
import { MongoService } from "../../../services/mongo";


export default async (req:NextApiRequest, res:NextApiResponse) => { 
    const controller = new Controller(req, res)
    const coll = req.query.coll as string
    console.log(coll)
    await MongoService.init()
    try {
        console.log(controller.getSearchQuery())
        const data = await MongoService.db.collection(coll).find(controller.getSearchQuery()).sort(controller.sort).limit(controller.limit).skip(controller.skip).toArray()
        controller.ok(data)
    }
    catch (e) {
        controller.error(e.message)
    }
}