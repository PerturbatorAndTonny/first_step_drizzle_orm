import { drizzle } from "drizzle-orm/better-sqlite3"
import { usersTable } from "../../../drizzle/db/schema.js"

const db = drizzle(process.env.DB_FILE_NAME)

export const createProduct = async (req, res) => {
  try {
    const { name, quantity, price, category } = req.body
    const newProducts = await db.insert(usersTable).values({
      name: name,
      quantity: quantity,
      category: price,
      price: category 
    }).returning()

    return res.status(200).json({
      message: "new product created",
      product: newProducts
    })

  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: "Something goes wrong"
    })
  }
}