import {pgTable, text,} from "drizzle-orm/pg-core";
import {createId} from "@paralleldrive/cuid2";
import {createInsertSchema} from "drizzle-zod";


export const users = pgTable(
    "users",
    {
        id: text("id").primaryKey().$defaultFn(() => createId()),
        email: text("email").unique().notNull(),
        name: text("name").notNull(),
        username: text("username").notNull(),
        password: text("password").notNull(),
    }
)

export const UserInsertSchema = createInsertSchema(users)
