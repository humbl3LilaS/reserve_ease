import {Hono} from "hono";
import {handle} from "hono/vercel";

export const runtime = "edge";

const app = new Hono().basePath("/api/hono");

app.get(
    "/hello",
    async (ctx) => {
        return ctx.json({message: "Hono integrated"})
    }
)

export const GET = handle(app);
export const PUT = handle(app);