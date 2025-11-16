
const checkUserData = (req , res , next) => {
    const {title , description , dueDate} = req.body

    if(!title || !description || !dueDate){
        return res.status(400).json({
            message :'All filed required'
        })
    }
    next()
}

module.exports = checkUserData