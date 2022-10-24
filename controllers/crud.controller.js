const Crud = require("../models/crud.model");

const crud = {
    async onGet(req,res){
        try {
            const cruds = await Crud.findAll().catch((err) => console.log("Error: ", err));
            res.send(cruds)
        } catch (error) {
            throw error
        }
    },
    async onPost(req,res){
        try {
            const { name, number } = req.body;
            const cruds = await Crud.create({ name: name, number: number }).catch((err) => console.log("Error: ", err));
            console.log("auto-generated ID:", cruds.id);
            res.status(201).send("Success Post")
        } catch (error) {
            throw error
        }
    },
    async onPut(req,res){
        try {
            const { id, name } = req.body;
            const cruds = await Crud.update({ name: name }, {
                where: {
                    id: id
                }
            }).catch((err) => console.log("Error: ", err));
            console.log("Update ID:", cruds.id);
            res.send("Success Put")
        } catch (error) {
            throw error
        }
    },
    async onDelete(req,res){
        try {
            const { id } = req.params
            await Crud.destroy({
                where: {
                    id: id
                }
            }).catch((err) => console.log("Error: ", err));
            console.log("Delete ID:", id);
            res.send("Success Delete")
        } catch (error) {
            throw error
        }
    }
}

module.exports = { ...crud }