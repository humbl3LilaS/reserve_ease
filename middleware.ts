import {NextRequest, NextResponse} from "next/server";
import {getToken} from "@auth/core/jwt";

export {auth} from '@/auth';

export async function middleware(request: NextRequest) {

    const publicPath = ["/sign-in", "/sign-up"];
    const pathname = request.nextUrl.pathname;

    const isProtectRoute = !publicPath.some((path) => path === pathname);

    if (!isProtectRoute) {
        return NextResponse.next();
    }

    const token = await getToken({req: request, secret: process.env.AUTH_SECRET});
    if (token) {
        return NextResponse.next();
    }

    const loginUrl = new URL("/login", request.url)

    return NextResponse.redirect(loginUrl)
}


export const config = {
    matcher: ["/:path*"]
}
