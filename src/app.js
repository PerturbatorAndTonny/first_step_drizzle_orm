import express from "express"
import morgan from "morgan"

const app = express()
app.use(express.json())
app.use(morgan('dev'))

app.use((req, res, next) => {
    res.status(404).json({
        Message: 'El servidor esta en desarrollo, ruta no encontrada'
    })
})

export default app