import { NextApiRequest, NextApiResponse } from "next";
import multer from "multer";
import Controller from "../../../services/controller";
import { MongoService } from "../../../services/mongo";
var storage = multer.diskStorage(
    {
        destination: "/opt/data/electrobase/cvs",
        filename: function (req, file, cb) {

            cb(null, String(Date.now()) + file.originalname );
      
        }
    }
);
const upload = multer({storage})
import nc from "next-connect";
export const config = {
    api: {
      bodyParser: false,
    },
}


export default nc().use(upload.single("cv")).post(async (req:NextApiRequest, res:NextApiResponse) => { 
    const controller = new Controller(req, res)
    await MongoService.init()
    try {
        if (req.method === "POST") {
            await MongoService.db.collection("cvs").insertOne({
                ...req.body,
                cv: ((req as any).file as Express.Multer.File).filename
            })
            controller.ok({ok: true})
        }
    }
    catch (e) {
        controller.error(e.message)
    }
})
