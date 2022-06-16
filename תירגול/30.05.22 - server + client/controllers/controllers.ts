import Course from '../models/models';

export const hendleGetDataServer = async (req, res) => {
    const courses = await Course.find({})
    res.send({ text: 'Hello from server', courses })
}