import "dotenv/config"
import { drizzle } from "drizzle-orm/better-sqlite3"
import { eq } from "drizzle-orm"
import { usersTable } from "./drizzle/db/schema.js"

export const db = drizzle(process.env.DB_FILE_NAME)

async function main() {
  const products = [
    {
      name: "Cereal kellogs",
      quantity: 2,
      price: `${2 * 5000}`,
      category: "Cereales"
    }, {
      name: "Pasta de dientes Colgate",
      quantity: 6,
      price: `${6 * 2500}`,
      category: "Aseo"
    }]

  //mostrar un atributo de cada posicion del array
  products.forEach((product) => console.log(product.id))

  // mostrar todos los elementos de cada posicion del array
  products.map((product) => console.log(product))

  // generar nuevos registros en base de datos
  products.map(async (product) => await db.insert(usersTable).values(product))
  console.log('new product recorded!!!')

  //consultar registros en base de datos
  const productRecords = await db.select().from(usersTable)
  productRecords.map((productRecord) => console.log(productRecord))

  const idProduct = await db.select().from(usersTable).where(eq(usersTable.name, "Pasta de dientes Colgate"))
  console.log(idProduct[0].id)


  //actualizacion de un resgistro en la base de datos
  const updateProduct = {
    name: "fortident",
    quantity: 2,
    price: `${4 * 3500}`,
    category: "Aseo"
  }

  await db.update(usersTable).set(updateProduct).where(eq(usersTable.id, idProduct[0].id))

  // delete de un registro

  const idProductUpdated = await db.select().from(usersTable).where(eq(usersTable.name, "fortident"))
  const deletedProduct = await db.delete(usersTable).where(eq(usersTable.id, idProductUpdated[0].id)).returning()
  console.log("Producto eliminado: ", deletedProduct)

}

main()

