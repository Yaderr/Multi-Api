'use strict'
const fetch = require('node-fetch')
module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return await(await fetch('https://newsapi.org/v2/top-headlines?country=US&apiKey=9021ee683b674f3098812707f20f029e')).json()
  })
}
