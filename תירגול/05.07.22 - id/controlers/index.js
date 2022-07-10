const { findById } = require('../model')
const Index = require('../model')

exports.getIndex = async (req, res) => {
    const index = await Index.find()

    // console.log(index[2]._id)
    // res.send(index[2]._id)
    res.send(index)
}

exports.postData = async (req, res) => {
    const { name, hobbie } = req.body

    console.log(name, hobbie)

    const user = new Index({ name, hobbie })
    await user.save()

    res.send({ ok: true, user })
}

exports.getOneUser = async (req, res) => {
    const { userId } = req.body

    console.log(userId)
    // const user = await Index.findById(userId)

    console.log(user)
}