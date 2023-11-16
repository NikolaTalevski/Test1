const course = require("../pkg/courses");

const getAll = async(req, res) => {
    try{
        const data = await course.getAll();
        return res.status(200).send(data);
    }catch(err) {
    console.error(err);
    return res.status(500).send("Internal server errors");
    }
}

module.exports = {
    getAll
}