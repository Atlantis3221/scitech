import { NextApiRequest, NextApiResponse } from "next";
import { IVacancies } from "../../../@types/generated/contentful";
import Controller from "../../../services/controller";
import { MongoService } from "../../../services/mongo";


export default async (req:NextApiRequest, res:NextApiResponse) => { 
    const controller = new Controller(req, res)
    await MongoService.init()
    try {
        const data:IVacancies[] = await MongoService.db.collection("vacancies").find({}).toArray()
        const categoryArray = data.map(vacancy => {
            return vacancy.fields.vacancyCategory
        })
        controller.ok([...new Set(categoryArray.flat())])
    }
    catch (e) {
        controller.error(e.message)
    }
}