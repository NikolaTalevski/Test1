const course = require("../pkg/courses");

const getOne = async(req, res) => {
    try{
        const data = await course.getOne(req.params.id);
        if(!data){
            return res.status(404).send("Course not found");
        }
        return res.status(200).send(data);
    }catch(err) {
    console.error(err);
    return res.status(500).send("Internal server errors");
    }
}

module.exports = {
    getOne
}