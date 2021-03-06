import { throws } from "assert"
import { Collection, Db, MongoClient } from "mongodb"



const uri = `${process.env.DATABASE_URL}`

class Mongo {
    client: MongoClient
    db: Db
    grants: Collection
    news: Collection

    constructor() {
        this.client = new MongoClient(uri)
        this.db = this.client.db("scitech")
        this.grants = this.db.collection("grants")
        this.news = this.db.collection("news")
    }
    async init() {
        await this.client.connect()
    }
    async close() {
        await this.client.close()
    }
    
}

export const MongoService = new Mongo()