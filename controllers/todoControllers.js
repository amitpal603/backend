const Todos = require('../models/todo')

const createTodos = async (req , res) => {
  const {title , description , dueDate} = req.body

  try {
    const convert = new Date(dueDate)
     if (isNaN(convert.getTime())) {
      return res.status(400).json({
        success: false,
        message: "Invalid date format. Use DD-MM-YYYY"
      });
    }
    const todos = new Todos({title , description , dueDate : convert , completed : false})
    await todos.save()
    return res.status(201).json({
        success :true,
        todos
    })
  } catch (error) {
    return res.status(500).json({
        success : false,
        message : 'Internal server error create todo !'
    })
  }
}

const getTodos = async (req, res) => {
  try {
    
    

    // fetch from database
    const get = await Todos.find({});

    if (!get || get.length === 0) {
      return res.json({
        success: false,
        message: 'Not yet any task'
      });
    }

   
    return res.status(200).json({
      success: true,
      todos: get,
    });

  } catch (error) {
    console.error("GET TODOS ERROR:", error);
    return res.status(500).json({
      success: false,
      message: `Internal server error get todo ! : ${error}`
    });
  }
};

const getTodoById = async  (req , res) => {
  const {id} = req.params
  try {
    const getById = await Todos.findById(id)

    if(!getById){
      return res.status(404).json({
        success : false,
        message : `wrong ID ${id}`
      })
    }
    return res.status(200).json({
      success: true,
      todos : getById
    })
  } catch (error) {
    return res.status(500).json({
        success : false,
        message : 'Internal server error get by id todo !'
    })
  }
}

const updateTodo = async (req , res) => {
   const {id} = req.params
    const {title , description , dueDate , completed} = req.body
  try {
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Todo ID is required",
      });
    }
    const update = {
      ...(title !== undefined && {title}),
      ...(description !== undefined && {description}),
      ...(dueDate !== undefined && {dueDate}),
      ...(completed !== undefined &&{completed})
    }
    const updateData = await Todos.findByIdAndUpdate(id,update,{new : true})
      if (!updateData) {
      return res.status(404).json({
        success: false,
        message: "Todo not found",
      });
    }
    return res.json({
      success : true,
      todos : updateData,
      message :'Todo Update SuccessFully ..!'
    })
  } catch (error) {
     return res.status(500).json({
        success : false,
        message : 'Internal server error update todo !'
    })
  }
}

const deleteTodo = async (req , res) => {
  const {id} = req.params
  try {
    if(!id) {
      return res.status(400).json({
        success :false,
        message : `Wrong ID : ${id}`
      })
    }
    const deleteTask = await Todos.findByIdAndDelete(id)

    if(!deleteTask) {
      return res.json({
        success :false,
        message :'Todo not found'
      })
    }
    return res.status(200).json({
      success : true,
      todos : deleteTask,
      message : 'Todo delete successFully..!'
    })
  } catch (error) {
     return res.status(500).json({
        success : false,
        message : 'Internal server error delete todo !'
    })
  }
}
// update complete todo single task
const toggleTodo = async (req , res) => {
  const {id} = req.params
 try {
  const singleTodo = await Todos.findOne({_id : id})

  if(!singleTodo){
    return res.status(404).json({
      success : false,
      message : 'Not found todo'
    })
  }

  singleTodo.completed = !singleTodo.completed
  await singleTodo.save()

  return res.json({
    success : true,
    message : 'Todo update successFully ..!',
    singleTodo
  })
 } catch (error) {
  console.log(error)
 }
}
module.exports = {createTodos , getTodos , getTodoById , updateTodo , deleteTodo , toggleTodo}