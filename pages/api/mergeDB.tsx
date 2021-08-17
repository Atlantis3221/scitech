import { NextApiRequest, NextApiResponse } from "next";
import { ContentfulService } from "../../services/contentful";
import Controller from "../../services/controller";
import { MongoService } from "../../services/mongo";
import requests from "./requests.json"
import xls from "exceljs"
import { object } from "webidl-conversions";
import fs from "fs"

export default async (req:NextApiRequest, res:NextApiResponse) => { 
    const controller = new Controller(req, res)
    await MongoService.init()
    try {
        console.log(process.env.NODE_ENV)
        const filteredRequests = requests.filter(req => req.group !== "registrations_1" && req.group !== "registrations")
        const newResults = filteredRequests.map(result => {
            return {
                ...result.payload,
                project: result.group.split("_")[1],
                createdAt: result.createdAt,
                company: result.payload.organization
            }
        })
        await MongoService.db.collection("regs").insertMany(newResults)
        controller.ok(true)
    }
    catch (e) {
        controller.error(e.message)
    }
}