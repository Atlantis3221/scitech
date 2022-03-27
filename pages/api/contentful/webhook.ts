import { NextApiRequest, NextApiResponse } from "next";
import { ContentfulService } from "../../../services/contentful";
import Controller from "../../../services/controller";
import { MongoService } from "../../../services/mongo";


export default async (req:NextApiRequest, res:NextApiResponse) => { 
    const controller = new Controller(req, res)
    try {
        const types = ['grants', 'news', "vacancies", "employers", "schoolProject"]
        await MongoService.init()
        for (let type of types) {
            await MongoService.db.collection(type).deleteMany({})
            let items = await ContentfulService.getAllEntriesOfOneType(type)
            if (items.length) {
                await MongoService.db.collection(type).insertMany(items)
            }

        }
        controller.ok(true)
    }
    catch (e) {
        controller.error(e.message)
    }
}