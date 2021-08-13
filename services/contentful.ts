import { ContentfulClientApi, createClient } from "contentful";


function sleep(ms:number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

class Contentful {
    private client: ContentfulClientApi
    constructor() {
        this.client = createClient({
            space: process.env.CONTENTFUL_SPACE_ID || "",
            accessToken: process.env.CONTENTFUL_API_KEY || ""
          });
    }
    async getAllEntriesOfOneType(content_type: string) {
        let skip = 0
        const response = await this.client.getEntries({
            content_type,
            skip,
        })
        const items = response.items
        while (response.total - skip > response.limit) {
            await sleep(200)
            const response = await this.client.getEntries({
                content_type,
                skip
            })
            skip += response.limit
            items.concat(response.items)
        }
        return items
    }
}

export const ContentfulService = new Contentful()