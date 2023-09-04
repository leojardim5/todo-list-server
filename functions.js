const Task = require("./taskdb");

const taskFunction = {
    getTask:async(req,res)=>{
        const {_id} = req.params
        try{
            const task = await Task.findOne({_id})
            if(!task){
                return res.status(404).json({error:"Task not found"})
            }
            return res.status(200).json(task)
        }catch(err){
            console.log(err) 
            return res.status(500).json({error:"Server error",err})
        }
        
    },
    getTasksAll:async(req,res)=>{
        try{
            const task = await Task.find()
            if(!task){
                return res.status(404).json({error:"Task not found"})
            }
            return res.status(200).json(task)
        }catch (err){
            console.log(err) 
            return res.status(500).json({error:"Server error",err})
        }
    },
    postTask:async(req,res)=>{
        const {name,about} = req.body
        try{
            const task = await Task.create({name,about})
            if(!task){ 
                return res.status(404).json({ error: 'Task not found' });
            }
            return res.status(200).json(task)
        }catch (err){
            return res.status(500).json({ error: 'Server Error',err });
        }
        
    },
    updateTask:async(req,res)=>{
        const {_id} = req.params
        const {name,about} = req.body
        try{
            const task = await Task.findByIdAndUpdate(_id,{name,about},{new:true})
            if(!task){ 
                return res.status(404).json({ error: 'Task not found' });
            }
            return res.status(200).json(task)
        }catch(err){
            return res.status(500).json({error:"server error",err})
        }
    },
    deleteTask:async(req,res)=>{
        const {_id} = req.params 
        try{
            const task = await Task.findByIdAndDelete({_id})
            if(!task){ 
                return res.status(404).json({ error: 'Task not found' });
            }
            return res.status(200).json(task)
        }catch(err){
            return res.status(500).json({error:"server error",err})
        } 
    },
    deleteAllTask:async(req,res)=>{
        try {
            await Task.deleteMany({})
        }catch(err){
            return res.status(500).send({error:"Server error",err})
        }
        return res.status(200).send({sucess:"All tasks deleted"})
    }
}

module.exports = taskFunction

