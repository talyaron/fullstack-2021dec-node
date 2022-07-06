import { productsArray } from "../products"

// export const 
export async function getAllProducts(req, res) {
    try {
        res.send({ ok: true, productsArray })
    } catch (error) {
        console.log(error)
        res.send(error)
    }
}

export async function getOneItem(req, res) {
    try {
        console.log(req)
        // console.log(req.params)
        // const { id } = req.params

        // const product = productsArray.filter(item => item.id === id)

        // // const user = await findById({id})
        // const item = product[0]

        // res.send({ ok: true, item })
    } catch (error) {

    }
}