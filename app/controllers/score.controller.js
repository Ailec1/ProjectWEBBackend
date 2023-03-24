const db = require("../models");
const score = db.scores;
const OP = db.Sequelize.Op;


exports.findAll = (req, res) => {
    score.findAll().then((data) => {
        res.send(data);
    });
}

exports.create = async (req, res) => {
    if (
        !req.body.score ||
        !req.body.user_id
    ) {
        res.status(400).send({
            message: "Score must have score and user_id !",
        });
        return;
    }
    await score.create({
        score: req.body.score,
        user_id: req.body.user_id,
    })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Score.",
            });
        });
}

exports.findOne = (req, res) => {
    const id = req.params.id;

    score.findByPk(id).then((data) => {
        res.send(data);
    });
}



exports.update = (req, res) => {
    const id = req.params.id;
    score.update(req.body, {
        where: { id: id },
    })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "Score was updated successfully.",
                });
            } else {
                res.send({
                    message: `Cannot update Score with id=${id}. Maybe Score was not found or req.body is empty!`,
                });
            }
        })

};

exports.delete = (req, res) => {
    const id = req.params.id;

    score.destroy({
        where: { id: id },
    })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "Score was deleted successfully!",
                });
            } else {
                res.send({
                    message: `Cannot delete Score with id=${id}. Maybe Score was not found!`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Could not delete Score with id=" + id,
            });
        });
}

exports.deleteAll = (req, res) => {
    score.destroy({
        where: {},
        truncate: false,
    })
        .then((nums) => {
            res.send({ message: `${nums} Scores were deleted successfully!` });
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all scores.",
            });
        });
}

exports.findAllPublished = (req, res) => {
    score.findAll({ where: { published: true } }).then((data) => {
        res.send(data);
    });
}

