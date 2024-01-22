import { useState } from "react"

export function CreateToDo(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return <div>
        <input id="title" type="text" placeholder="title" onKeyDown={(e)=>{
            const val = e.target.value;
            setTitle(val)
        }}/>
        <br />
        <input id="description" type="text" placeholder="dscription" onKeyDown={(e)=>{
            const val = e.target.value;
            setDescription(val);
        }}/>
        <br />
        <button onClick={() => {
            fetch("http://localhost:3000/todos",{
                method: 'POST',
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers: {
                    "Content-type": "application.json"
                }
            } 
            )
            .then(async function(res){
                const json = await res.json();
                alert('Todo added')
            })}
        }>Add Todo</button>
    </div>
}