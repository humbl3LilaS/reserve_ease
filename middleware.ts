import {NextRequest, NextResponse} from "next/server";
import {getToken} from "@auth/core/jwt";

export {auth} from '@/auth';

export async function middleware(request: NextRequest) {

    const publicPath = ["/sign-in", "/sign-up"];
    const pathname = request.nextUrl.pathname;

    const isProtectRoute = !publicPath.some((path) => path === pathname);
    const token = await getToken({req: request, secret: process.env.AUTH_SECRET});

    if (!isProtectRoute) {
        if (!token) {
            return NextResponse.next();
        } else {
            return NextResponse.redirect(new URL("/",request.url));
        }
    }

    if (token) {
        return NextResponse.next();
    }

    const loginUrl = new URL("/sign-in", request.url)
    return NextResponse.redirect(loginUrl)
}


export const config = {
    matcher: ["/", "/sign-in", "/sign-up"],
}
