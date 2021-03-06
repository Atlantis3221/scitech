import { NextApiRequest, NextApiResponse } from "next";
import { ContentfulService } from "../../../services/contentful";
import Controller from "../../../services/controller";
import { MongoService } from "../../../services/mongo";

export default async (req:NextApiRequest, res:NextApiResponse) => { 
    const controller = new Controller(req, res)
    try {
        controller.ok(true)
    }
    catch (e) {
        controller.error(e.message)
    }
}