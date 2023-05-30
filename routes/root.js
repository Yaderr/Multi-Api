


module.exports = async function(fastify, opts) {

    const handler =  async function(request, reply) {

        const { headers, url, method } = request
        const hostName = headers['host-api-name']
        if(!hostName) return new Error('Invalid request, check docs')

        const apiKey = process.env[headers['api-key-env']]

        const result = await fetch(`${hostName}${url} `, {
            method,
            headers: {
               'Authorization': apiKey
            }
        })
        const response = await result.json()

        console.log(result);
                
        return reply.code(result.status).send(response)
    }

    fastify.get('*', handler)
    fastify.post('*', handler)
    fastify.put('*', handler)
    fastify.delete('*', handler)
    fastify.patch('*', handler)

}