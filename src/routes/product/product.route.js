import { Router } from "express"
import { createProduct } from "../../controllers/product/product.controller.js"

const routerProducts = Router()

routerProducts.post('/createNewProduct', createProduct)

export default routerProducts
