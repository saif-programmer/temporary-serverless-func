// domain/.netlify/functions/1-hello

const person = {name : 'john'}

exports.handler = async (event, context) => {
    return {
        statusCode: 200,
        body: "first example" //JSON.stringify(person),
    }
}