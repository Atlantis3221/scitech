import { NextApiRequest, NextApiResponse } from "next";
import { IVacancies } from "../../../@types/generated/contentful";
import { IShortVacancy } from "../../../domain/vacancies/types";
import Controller from "../../../services/controller";
import { MongoService } from "../../../services/mongo";


export default async (req:NextApiRequest, res:NextApiResponse) => { 
    const controller = new Controller(req, res)
    await MongoService.init()
    try {
        const data = await MongoService.db.collection("vacancies").findOne({"fields.vacancyURL": {$in: [req.query.url]}})
        controller.ok(data)
    }
    catch (e) {
        controller.error(e.message)
    }
}