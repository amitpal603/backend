const Redis = require('ioredis')
require('dotenv')
const redis = new Redis({
     host : process.env.REDIS_HOST,
       port : process.env.REDIS_PORT,
    password : process.env.REDIS_PASSWORD
})

redis.on('connect', () => {
    console.log('redis connected')
})
module.exports = redis