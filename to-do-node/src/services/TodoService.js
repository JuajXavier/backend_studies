const Todo = require('../models/Todo');

module.exports = class TodoService {

    static async getTodo() {
        try {            
            const response = await new Todo.findById();
            return response;

        } catch (error) {
            console.log({error})
        }
    }


    static async getAllTodos() {
        try {
            // .find é um método do mongoose
            const allTodos = await Todo.find();
            return allTodos;
        } catch (error) {
            console.log({error})
        }
    }

    static async addTodo(data) {
        try {
            const newTodo = {
                title: data.title,
                description: data.description,
                date: data.date,
                finished: data.finished,
            }
            
            // .save(), método para salvar um novo item na tabela/collection com mongoose;
            const response = await new Todo(newTodo).save();
            return response;

        } catch (error) {
            console.log({error})
        }
    }

    static async updateTodo() {
        try {
            const response = await new Todo.findByIdAndUpdate();
            return response;

        } catch (error) {
            console.log({error})
        }
    }

    static async deleteTodo() {
        try {            
            const response = await new Todo.findByIdAndDelete();
            return response;

        } catch (error) {
            console.log({error})
        }
    }

}