import {db} from "@/database/drizzle";
import {users} from "@/database/schema";
import {and, eq} from "drizzle-orm";
import {decryptPassword} from "@/lib/actions";

export const POST = async (req: Request) => {
    try {
        const body = await req.json() as Record<string, any>;
        const email = body.email;
        const password = body.password;
        const [user] = await db
            .select({id: users.id, email: users.email, password: users.password})
            .from(users)
            .where(
                and(
                    eq(users.email, email as string),
                )
            )

        if (!user) {
            return new Response(JSON.stringify({message: "User not found"}), {status: 404});
        }

        const isUser = await decryptPassword(password, user.password);

        if (!isUser) {
            return new Response(JSON.stringify({message: "Invalid Password"}), {status: 401});
        }

        return new Response(JSON.stringify({email: user.email, id: user.id}), {status: 200});

    } catch (e) {
        console.log("error logging in")
    }
}