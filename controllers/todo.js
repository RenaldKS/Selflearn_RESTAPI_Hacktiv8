const db = require('../config/index');

class Todo {

    //get all todos
    async getTodos() {

        let result = await db.query(
            `SELECT * FROM todos`
        ).catch(console.log);
        return result.rows;
    };

    async createTodo(todo){

        await db.query('INSERT INTO todos (title,checked) VALUES ($1,$2)',[todo.title,false])
        .catch(console.log);
        return;
    };

    async updateTodo(todoid){
        //get previos todo.
        let original_todo = await db.query('SELECT * FROM todos WHERE id=$1',[parseInt(todoid)])
        .catch(console.log);

        //update
        await db.query('UPDATE todos SET checked=$1 Where id=$2',[!original_todo.rows[0].checked,parseInt(todoid)])
        .catch(console.log);

        return;
    };

    //delete
    async deleteTodo(todoid) {
        await db.query('DELETE FROM todos WHERE id=$1', [parseInt(todoid)])
        .catch(console.log);

        return;
    };
};

module.exports = Todo;
