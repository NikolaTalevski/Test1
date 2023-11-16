const course = require("../pkg/courses");

const create = async(req, res) => {
    try{
        const data = {
            ...req.body,
            course_id: req.auth.id 
        };
        const newCourse = await course.create(data);
        return res.status(200).send(newCourse);
    }catch(err) {
    console.error(err);
    return res.status(500).send("Internal server errors");
    }
}

module.exports = {
    create
}