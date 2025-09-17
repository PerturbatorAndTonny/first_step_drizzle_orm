import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const usersTable = sqliteTable("products", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  quantity: int().notNull(),
  price: text().notNull(),
  category: text().notNull()  // se puede crear un modelo independiente
});
