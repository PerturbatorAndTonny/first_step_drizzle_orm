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


  await db.insert(usersTable).values(user)
  console.log('new user created!!')

  const users = await db.select().from(usersTable);
  console.log('Getting all users from table database: ', users)

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

