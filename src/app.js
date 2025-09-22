import express from "express"
import morgan from "morgan"

import routerProducts from "./routes/product/product.route.js"

const app = express()
app.use(express.json())
app.use(morgan('dev'))

app.use('/api', routerProducts)

app.use((req, res, next) => {
    res.status(404).json({
        Message: 'El servidor esta en desarrollo, ruta no encontrada'
    })
})

export default app