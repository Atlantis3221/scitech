import { NextApiRequest, NextApiResponse } from "next";
import { IVacancies } from "../../../@types/generated/contentful";
import Controller from "../../../services/controller";
import { MongoService } from "../../../services/mongo";
import { IShortVacancy } from "../../[lang]/vacancytest";


export default async (req:NextApiRequest, res:NextApiResponse) => { 
    const controller = new Controller(req, res)
    await MongoService.init()
    try {
        const data: IVacancies[] = await MongoService.db.collection("vacancies").find(controller.getSearchQuery()).sort(controller.sort).limit(controller.limit).skip(controller.skip).toArray()
        const response: IShortVacancy[] = data.map(value => {
            return ({
                image: "https://" + value.fields.employer.fields.image.fields.file.url,
                name: value.fields.vacancyName,
                employer: value.fields.employer.fields.name,
                location: value.fields.location
            })
        })
        controller.ok(response)
    }
    catch (e) {
        controller.error(e.message)
    }
}