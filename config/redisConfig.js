const Redis = require('ioredis')

const redis = new Redis({
     host : 'redis-13597.c305.ap-south-1-1.ec2.cloud.redislabs.com',
       port : 13597,
    password : 'giD7xTs13kFEGTWXMsVRH2A3x9WF9aoW'
})

redis.on('connect', () => {
    console.log('redis connected')
})
module.exports = redis