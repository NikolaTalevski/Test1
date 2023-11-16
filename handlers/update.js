const course = require("../pkg/courses");

const update = async(req, res) => {
    try{
        const data = {
            ...req.body,
            course_id: req.auth.id 
        };
        await course.update(req.params.id, data);
        return res.status(204).send("Update successfull!")
    }catch(err) {
    console.error(err);
    return res.status(500).send("Internal server errors");
    }
}

module.exports = {
    update
}