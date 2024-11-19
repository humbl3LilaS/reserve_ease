import {mongoConnect} from "@/database/mongo";

export async function register() {
    await mongoConnect();
}