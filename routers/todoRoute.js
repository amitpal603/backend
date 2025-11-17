const express = require('express')
const router = express.Router()
const checkUserData = require('../middleware/dataCheck')
const {createTodos, getTodos ,getTodoById ,updateTodo , deleteTodo,toggleTodo} = require('../controllers/todoControllers')

router.post('/create' , checkUserData , createTodos)
router.get('/getTodo', getTodos)
router.get('/getById/:id' , getTodoById)
router.put('/update/:id', updateTodo)
router.delete('/delete/:id' , deleteTodo)
router.patch('/single/:id',toggleTodo)

module.exports = router