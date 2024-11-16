"use server"

import bcrypt from "bcrypt";

export async function hashPassword(password: string) {
    const saltRound = 10;
    return await bcrypt.hash(password, saltRound);
}

export async function decryptPassword(password: string, hashedPassword: string) {
    return await bcrypt.compare(password, hashedPassword);
}