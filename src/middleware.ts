import {auth} from "@/auth"
import {DEFAULT_LOGIN_REDIRECT, apiAuthPrefix, authRoutes, publicRoutes} from '@/routes';
import {NextRequest} from "next/server";

export default auth((req) => {
    const {nextUrl} = req;
    const isLoggedIn = !!req.auth;

    // const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
    // const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
    // const isAuthRoute = authRoutes.includes(nextUrl.pathname);
    if (!req.auth && req.nextUrl.pathname === '/settings') {
        return Response.redirect(new URL('/auth/login', req.nextUrl.origin))
    }

})

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ]
}