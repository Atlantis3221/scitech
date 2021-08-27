import { NextApiRequest, NextApiResponse } from "next";
import { IVacancies } from "../../../@types/generated/contentful";
import { IShortVacancy, IVacanciesQuery } from "../../../domain/vacancies/types";
import Controller from "../../../services/controller";
import { MongoService } from "../../../services/mongo";


export default async (req:NextApiRequest, res:NextApiResponse) => { 
    const controller = new Controller(req, res)
    await MongoService.init()
    try {
        if (req.method === "POST") {
            const state:IVacanciesQuery = req.body
            console.log(state)
            let search:any = {}
            if (state.location !== "Любая") {
                search["fields.location"] = state.location
            }
            if (state.currentCategories.length > 0) {
                search["fields.vacancyCategory"] = {$in: state.currentCategories}
            }
            if (state.searchQuery) {
                const searchRegex = "\w*(" + state.searchQuery.replace(/W/, ")\w*|\w*") + "\w*"
                console.log(new RegExp(searchRegex))
            }
            const data: IVacancies[] = await MongoService.db.collection("vacancies").find(search).toArray()
            const response: IShortVacancy[] = data.map(value => {
                return ({
                    image: "https://" + value.fields.employer.fields.image.fields.file.url,
                    name: value.fields.vacancyName,
                    employer: value.fields.employer.fields.name,
                    location: value.fields.location,
                    salary: value.fields.salary
                })
            })
            controller.ok(response)
            return
        }
        throw new Error("NO SUCH METHOD")

    }
    catch (e) {
        controller.error(e.message)
    }
}