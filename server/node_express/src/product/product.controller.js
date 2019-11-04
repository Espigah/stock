import {
    exec,
    adapters
} from '../utils/execAdapterAction'

const create = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Content can not be empty"
        });
    }

    console.log(">>>",adapters,exec)

    adapters((productAdapter) => {
            return exec(
                productAdapter.adapter,
                productAdapter.create,
                req.body
            )
        })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Note."
            });
        });

}




const findAll = (req, res) => {
    console.log("[ controller::findAll ]")
    adapters((productAdapter) => {
            return exec(
                productAdapter.adapter,
                productAdapter.findAll
            )
        })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Note.",
                err:err
            });
        });

}

const findOne = (req, res) => {
    productFactory().findOne();
    res.send('Birds home page');
}

const update = (req, res) => {
    productFactory().update();
    res.send('Birds home page');
}

const remove = (req, res) => {
    productFactory().remove();
    res.send('Birds home page');
}


export {
    create,
    findAll,
    findOne,
    update,
    remove
};