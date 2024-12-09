import Fastify from 'fastify'

const fastify = Fastify({
    logger: true
})

fastify.get("/hello", async (request,replay)=> {
    return {message: "world"};
});


const start = async () =>{
    try {
        await fastify.listen({port: 3003});
        fastify.log.info(`server listen on ${fastify.server.address()}`);
    } catch (error) {
        fastify.log.error(error);
    }
}

start();