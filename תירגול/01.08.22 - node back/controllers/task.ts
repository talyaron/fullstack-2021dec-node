import Task from '../model/task';

// export async function getTasks(req, res) {

// }

export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.send(tasks)
    } catch (error) {
        console.error(error)
        res.send(error)
    }
}

export const saveTask = async (req, res) => {
    try {
        // console.log(req.body)
        const { title, desc } = req.body
        console.log(title, desc)

        const newTask = new Task({ title, description: desc })
        const savedTask = await newTask.save();

        if (savedTask) {
            console.log(`ok`)
            const tasks = await Task.find({})
            res.send(tasks)
        } else {
            console.log(`the task isnt saved`)
        }
    } catch (error) {
        console.error(error)
        res.send(error)
    }
}

export const deleteTask = async (req, res) => {
    try {

    } catch (error) {
        console.error(error)
        res.send(error)
    }
}

export const updateTask = async (req, res) => {
    try {

    } catch (error) {
        console.error(error)
        res.send(error)
    }
}
