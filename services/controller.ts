import { NextApiRequest, NextApiResponse } from "next"
import { MongoService } from "./mongo"

class Controller {
    req: NextApiRequest
    res: NextApiResponse
    query: {
        limit?: string,
        page?: string,
        sort_by?: string,
        sort_order?:string
        index_key?: string,
        index_value?: string | string[]
        }
    limit: number
    skip: number
    sort: any
    constructor(req:NextApiRequest,res:NextApiResponse) {
        this.req = req
        this.res = res
        this.query = req.query
        this.limit = this.query.limit ? Number(this.query.limit) : 1000,
        this.skip = this.query.page && this.query.limit ? Number(this.query.page) * Number(this.query.limit) : 0,
        this.sort = this.query.sort_by && this.query.sort_order ? {[this.query.sort_by]: Number(this.query.sort_order)} : {}
    }
    getSearchQuery() {
        let obj:any={}
        Object.keys(this.query).map(a => {
            if (a === "page" 
            || a === "sort_by" 
            || a === "sort_order" 
            || a === "limit" 
            || a === "index_key" 
            || a === "index_value" 
            || a === "coll") {
                return {}
            }
            else {
                if (this.query[a] === "true") {
                    obj[a] = true
                    return
                }
                if (this.query[a] === "false") {
                    obj[a] = false
                    return
                }
                const array = this.query[a].split(",")
                obj[a] = {$in: array}
            }
        })
        if (this.query.index_key && this.query.index_value) {
            obj[this.query.index_key] = this.query.index_value
            if (Array.isArray(this.query.index_value)) {
             obj[this.query.index_key] = {$in: this.query.index_value}
            }
        }
        console.log(obj)
        return obj

    }
    ok(data){
        this.res.json({ok:true, data: data})
        MongoService.close()
    }
    error(message) {
        this.res.json({ok: false, data: message})
        MongoService.close()
    }
}

export default Controller