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
    try {
        console.log(process.env.NODE_ENV)
        const registrations1 = requests.filter(a => a.group === "registrations_1")
        const registrations = requests.filter(a => a.group === "registrations")
        const workbook = new xls.Workbook()
        const regSheet = workbook.addWorksheet("Reg")
        regSheet.columns = [
            { header: 'Name', key: 'name', width: 32 },
            { header: 'Phone', key: 'phone', width: 22 },
            { header: 'Email', key: 'email', width: 32, outlineLevel: 1 },
            { header: 'Organization', key: 'organization', width: 32}
        ]
        registrations.map(reg => {
            regSheet.addRow({...reg.payload})
        })
        const reg1Sheet = workbook.addWorksheet("Reg1")
        reg1Sheet.columns = [
            { header: 'Name', key: 'fullName', width: 32 },
            { header: 'Phone', key: 'phone', width: 22 },
            { header: 'Email', key: 'email', width: 32, outlineLevel: 1 },
            { header: 'Job', key: 'jobPosition', width: 32},
            { header: 'Type', key: 'type', width: 32}
        ]
        registrations1.map(reg => {
            reg1Sheet.addRow({...reg.payload})
        })
        await workbook.xlsx.writeFile(process.env.ROOT + "/pages/api/reg.xlsx")
        controller.ok(true)
    }
    catch (e) {
        controller.error(e.message)
    }
}