import {db} from "@/database/drizzle";
import {users} from "@/database/schema";
import {and, eq} from "drizzle-orm";

export const POST = async (req: Request) => {
    try {
        const body = await req.json() as Record<string, any>;
        const email = body.email;
        const password = body.password;
        const [user] = await db
            .select({id: users.id, email: users.email})
            .from(users)
            .where(
                and(
                    eq(users.email, email as string),
                    eq(users.password, password)
                )
            )
        if (!user) {
            return new Response(JSON.stringify({message: "User not found"}), {status: 401});
        }

        return new Response(JSON.stringify(user), {status: 200});

    } catch (e) {
        console.log("error logging in")
    }
}