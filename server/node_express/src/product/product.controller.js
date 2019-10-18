import productCreateAdpter from './bo/product.adapter';

const create = (req, res) => {
    if (!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    
    productCreateAdpter.factory().createBO(req.body.title, req.body.content)
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Note."
            });
        });
}

const findAll = (req, res) => {
    productCreateAdpter.factory().findAll();
    res.send('Birds home page');
}

const findOne = (req, res) => {
    productCreateAdpter.factory().findOne();
    res.send('Birds home page');
}

const update = (req, res) => {
    productCreateAdpter.factory().update();
    res.send('Birds home page');
}

const remove = (req, res) => {
    productCreateAdpter.factory().remove();
    res.send('Birds home page');
}


export {
    create,
    findAll,
    findOne,
    update,
    remove
};