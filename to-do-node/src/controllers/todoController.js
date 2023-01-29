const TodoService = require('../services/TodoService');

exports.get = (req, res) => {
    const id = req.params.id;
    console.log('get')
    res.send(`OK get id = ${id}`);
}

exports.getAll = async (req, res) => {
    try {
        const allTodos = await TodoService.getAllTodos();

        if (!allTodos) {
            return res.status(404).json('There are no todos published yet.')
        }

        res.json(allTodos);
    } catch (err) {
        return res.status(500).json({ error: err });
    }

}

exports.add = async (req, res) => {
    try {
        const createTodo = await TodoService.addTodo(req.body);
        res.status(201).json(createTodo);
    } catch (err) {
        return res.status(500).json({ error: err });
    }
}

exports.update = async (req, res) => {
    try {
        const updateTodo = await TodoService.updateTodo(req.body);
        res.status(201).json(updateTodo);
    } catch (err) {
        return res.status(500).json({ error: err });
    }
}

exports.delete = (req, res) => {
    console.log('delete')
    res.send('OK delete');
}

