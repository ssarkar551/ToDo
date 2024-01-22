import { mongoose } from "mongoose";
//mongodb url: mongodb+srv://shadowFang09:JawYJDSOePKwnWV3@cluster0.x4py9o2.mongodb.net/
mongoose.connect('mongodb+srv://shadowFang09:JawYJDSOePKwnWV3@cluster0.x4py9o2.mongodb.net/')
const todoschema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoschema);

module.exports = {
    todo
}