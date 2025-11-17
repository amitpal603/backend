
const corsOptions = {
    origin : [' http://localhost:5173','https://frontend-algg.vercel.app'],
    methods : ['GET' , 'POST' , 'PUT' , 'DELETE','PATCH'],
    credential : true,
    allowedHeaders : 'Content-Type'
}

module.exports = corsOptions