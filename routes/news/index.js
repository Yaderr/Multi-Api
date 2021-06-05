'use strict'
const fetch = require('node-fetch')
const api_url = 'https://newsapi.org/v2'
module.exports = async function (fastify, opts) {
  fastify.get('*', async function (request, reply) {
    
    const url_req = request.url.split('news')[1];
    const res = await fetch(`${api_url}${url_req}`).then((data) => data.json())
    
    return res
  })
}
