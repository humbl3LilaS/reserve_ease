import {NextRequest, NextResponse} from "next/server";
import {getToken} from "@auth/core/jwt";

export {auth} from '@/auth';

export async function middleware(request: NextRequest) {
    const authRoute = ["/sign-in", "/sign-up"]
    const publicRoute = ["/", "/restaurants", ...authRoute];
    const pathname = request.nextUrl.pathname;

    const isProtectRoute = !publicRoute.some((path) => path === pathname);
    const token = await getToken({req: request, secret: process.env.AUTH_SECRET});

    if (!isProtectRoute) {
        const isAuthRoute = authRoute.some(path => path === pathname);
        if (isAuthRoute && token) {
            return NextResponse.redirect(new URL("/", request.url))
        }
        return NextResponse.next();
    }

    if (token) {
        return NextResponse.next();
    }

    const loginUrl = new URL("/sign-in", request.url)
    return NextResponse.redirect(loginUrl)
}


export const config = {
    matcher: ["/", "/sign-in", "/sign-up", "/reservations", "/restaurants"],
}
