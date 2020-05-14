const db = require("../models/index");
const Subject = db.Subject;
//Mirar para que es
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  // Llego una peticion
  if (!req.body.title || !req.body.cohort) {
    res.status(400).send({
      message: "Title cannot be empty",
    });
    return;
  }

  const subject = {
    title: req.body.title,
    description: req.body.description,
  };

  //Se intenta crear una materia
  Subject.create(subject)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error the service",
      });
    });
};

//Busca las materias
exports.findAll = (req, res) => {
  const title = req.query.title;
  const condition = title ? { title: { [Op.like]: `%${title}$` } } : null;
  Subject.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error the service",
      });
    });
};
