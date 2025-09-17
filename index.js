import "dotenv/config"
import { drizzle } from "drizzle-orm/better-sqlite3"
import { eq } from "drizzle-orm"
import { usersTable } from "./drizzle/db/schema.js"

export const db = drizzle(process.env.DB_FILE_NAME)

async function main() {
  const user = {
    name: "Jhon",
    age: 30,
    email: 'JhonDoe@gmail.com'
  }

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

  /*
  await db
    .update(usersTable)
    .set({
      age: 31,
    })
    .where(eq(usersTable.email, user.email));
  console.log('User info updated!')
  await db.delete(usersTable).where(eq(usersTable.email, user.email));
  console.log('User deleted!')
  */
}

main()

