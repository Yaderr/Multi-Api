'use strict'

// Read the .env file.
require('dotenv').config()

// Require the framework
const fastify = require('fastify')({})

fastify.register(require("@fastify/cors"), {
  "Access-Control-Allow-Origin": "*", 
  "Access-Control-Allow-Headers": "*",
  origin: ['https://web.app', 'https://newzia-app.web.app/', 'https://newzia-app.web.app', 'http://newzia-app.web.app', 'http://web.app'],
})

// Register your application as a normal plugin.
fastify.register(require('./app.js'))

// Start listening.
const start = async () => {
  try {
    await fastify.listen({ port: process.env.PORT || 3000, host: '0.0.0.0' })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
