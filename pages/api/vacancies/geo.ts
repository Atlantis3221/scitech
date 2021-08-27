import { NextApiRequest, NextApiResponse } from "next";
import { IVacancies } from "../../../@types/generated/contentful";
import Controller from "../../../services/controller";
import { MongoService } from "../../../services/mongo";


export default async (req:NextApiRequest, res:NextApiResponse) => { 
    const controller = new Controller(req, res)
    await MongoService.init()
    try {
        const data:IVacancies[] = await MongoService.db.collection("vacancies").find({}).toArray()
        const locationsArray = data.map(vacancy => {
            return vacancy.fields.location
        })
        controller.ok([...new Set(locationsArray)])
    }
    catch (e) {
        controller.error(e.message)
    }
}