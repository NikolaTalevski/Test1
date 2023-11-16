const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    Ime: String,
    Brojnacasovi: String,
    Predavac: String,
    Kniga: String,
});

const Course = mongoose.model("courses", courseSchema);

const getAll = async() => {
    return await Course.find({});
};

const getOne = async(id) => {
    return await Course.findOne({_id: id});
};

const create = async(c) => {
    const course = new Course(c);
    return await course.save();
};

const update = async(id, newData) => {
    return await Course.updateOne({id: id}, newData);
};

const remove = async(id) => {
    return await Course.deleteOne({_id: id});
};

module.exports = {
    getAll,
    getOne,
    create,
    update,
    remove
}