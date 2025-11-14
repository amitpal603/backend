
const checkUserData = (req , res , next) => {
    const {title , description , duaDate} = req.body

    if(!title || !description || !duaDate){
        return res.status(400).json({
            message :'All filed required'
        })
    }
    next()
}

module.exports = checkUserData