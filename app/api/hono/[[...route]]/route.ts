import {Hono} from "hono";
import {handle} from "hono/vercel";


export const runtime = "edge";

const app = new Hono().basePath("/api/hono");


export const GET = handle(app);
export const PUT = handle(app);
