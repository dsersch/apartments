const
    express = require('express')
    apartmentsRouter = new express.Router()
    apartmentsCtrl = require("../controllers/apartments.js")

apartmentsRouter.route('/')
    .get(apartmentsCtrl.index)
    .post(apartmentsCtrl.create)

apartmentsRouter.route('/:id')
    .get(apartmentsCtrl.show)
    .patch(apartmentsCtrl.update)
    .delete(apartmentsCtrl.destroy)

module.exports = apartmentsRouter