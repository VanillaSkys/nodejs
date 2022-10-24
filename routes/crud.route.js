const crud = require('express').Router();
const controller = require('../controllers/crud.controller');

crud.get('/onGet', controller.onGet)
crud.post('/onPost', controller.onPost)
crud.put('/onPut', controller.onPut)
crud.delete('/onDelete/:id', controller.onDelete)

module.exports = crud;