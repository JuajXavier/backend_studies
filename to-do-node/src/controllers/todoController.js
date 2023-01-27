exports.get = (req, res) => {
    const id = req.params.id;
    console.log('get')
    res.send(`OK get id = ${id}`);
}

exports.getAll = (req, res) => {
    console.log('getAll')
    res.send('OK getAll');
}

exports.add = (req, res) => {
    console.log('add')
    res.send('OK add');
}

exports.update = (req, res) => {
    console.log('update')
    res.send('OK update');
}

exports.delete = (req, res) => {
    console.log('delete')
    res.send('OK delete');
}

