require("dotenv").config() //to get the api_key from .env

base_id="appO63rU3LcuIhUlk"
table_name="products"

const Airtable = require('airtable-node');

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
.base(base_id)
.table(table_name)

exports.handler = async (event, context) => {
    console.log(event)
    const {id} = event.queryStringParameters
    if (id){
        try {
            const product = await airtable.retrieve(id)
            if(product.error){
                return {
                    statusCode: 404,
                    body: `No product with id:${id}` ,
                }
            }
            return {
                statusCode: 200,
                body: JSON.stringify(product) ,
            }
            console.log(product)
        } catch (error) {
            return {
                statusCode: 500,
                body: `Server Error` ,
            }
        }
    }
    return {
        statusCode: 400,
        body: "Please Provide Product Id" ,
    }
}