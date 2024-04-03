import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { NextResponse } from "next/server";

// Define the public routes that do not require authentication
const publicRoutes = [
  '/sign-in',
  '/sign-up',
  // Do not add the routes here that you want to protect
];

export default authMiddleware({
  publicRoutes: publicRoutes,
  afterAuth(auth, req, evt) {
    // Handle users who aren't authenticated
    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url });
    }
    // Redirect signed in users to the specified routes if they are not active in an organization
    if (
      auth.userId &&
      !auth.orgId &&
      ['/', '/upcoming', '/meeting(.*)', '/previous', '/recordings', '/personal-room'].includes(req.nextUrl.pathname)
    ) {
      // Allow access to these routes since the user is authenticated
      return NextResponse.next();
    }
    // If the user is signed in and trying to access a protected route, allow them to access route
    if (auth.userId && !auth.isPublicRoute) {
      return NextResponse.next();
    }
    // Allow users visiting public routes to access them
    return NextResponse.next();
  },
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)","/","/(api|trpc)(.*)"],
};
