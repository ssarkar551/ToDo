const zod = require('zod');

const createTodo = zod.object({
    title: zod.ZodString(),
    description: zod.ZodString()
})

const updateTodo = zod.object({
    id: zod.ZodString(),

})

module.exports = {
    createTodo: createTodo,
    updateTodo: updateTodo
}