import {express} from 'express';
import { createTodo, updateTodo } from './types';
import { todo } from './db';

const app = express();
app.use(express.json());
app.post('/todo', async(req, res)=>{
    const createPayLoad = req.body;
    const parsedpayLoad = createTodo.safeParse(createPayLoad);
    if(!parsedpayLoad.success){
        res.status(411).json({
            msg: 'You sent the wrong inputs'
        })
        return;

    }
    //put in mongodb
    await todo.create({
        title: createPayLoad.title,
        description: createPayLoad.description,
        completed: false
    })
    res.json({
        msg: 'todo created'
    })
})
app.get('/todos', async(req, res)=>{
    const todos = await todo.find({});
    console.log('todos: ', todos);
    res.json({
        todos
    })
})
app.put('/completed', async(req, res)=>{
    const createPayLoad = req.body;
    const parsedpayLoad = updateTodo.safeParse(createPayLoad);
    if(!parsedpayLoad.success){
        res.status(411).json({
            msg: 'Wrong inputs!'
        })
        return;
    }
    //update in mongodb
    await todo.update({
        _id: req.body.id,

    }, {
        completed: true
    })
    res.json({
        msg: 'updated'
    })

})
app.listen(3000)