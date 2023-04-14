const express = require('express');
const router = express.Router();
const Todo = require('../controllers/todo')

//get all todos.
router.get('/', async (req,res) => {
});

//Create a todo.
router.post('/todo', async (req,res) => {});

//update todo
router.put('/todo/:todoid', async (req,res) => {});

//delete todo
router.delete('/todo/:todoid', async (req,res));

module.exports = router;