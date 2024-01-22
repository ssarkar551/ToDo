import { mongoose } from "mongoose";

mongoose.connect(process.env.MONGO_URL);
const todoschema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoschema);

module.exports = {
    todo
}