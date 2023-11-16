const course = require("../pkg/courses");

const remove = async(req, res) => {
    try{
        await course.remove(req.params.id);
        return res.status(200).send("Delete successfull!");
    }catch(err) {
    console.error(err);
    return res.status(500).send("Internal server errors");
    }
}

module.exports = {
    remove
}