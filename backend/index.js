import {express} from 'express';
import { createTodo, updateTodo } from './types';

const app = express();
app.use(express.json());
app.post('/todo', (req, res)=>{
    const createPayLoad = req.body;
    const parsedpayLoad = createTodo.safeParse(createPayLoad);
    if(!parsedpayLoad.success){
        res.status(411).json({
            msg: 'You sent the wrong inputs'
        })
        return;

    }
    //put in mongodb
})
app.get('/todos', (req, res)=>{

})
app.put('/completed', (req, res)=>{
    const createPayLoad = req.body;
    const parsedpayLoad = updateTodo.safeParse(createPayLoad);
    if(!parsedpayLoad.success){
        res.status(411).json({
            msg: 'Wrong inputs!'
        })
        return;
    }
    //update in mongodb

})
app.listen(3000)