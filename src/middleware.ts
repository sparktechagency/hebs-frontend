import { NextRequest, NextResponse } from "next/server";
// import { parseCookies } from "nookies"; 
import { getCurrentUser } from "./utils/getCurrentUser";

type Role = keyof typeof roleBasedPrivateRoutes;

const authRoutes = ["/login", "/signUp"];

const roleBasedPrivateRoutes = {
  user: [ /^\/subscriptionPurchase/,/^\/payment/,/^\/subscription/,/^\/my-profile/,/^\/billing/],
};

export const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;
console.log("pathname===>>",pathname);
  // Correct way to access cookies from the request 
//   const cookies = parseCookies({ req: request });
//   const userInfo = cookies.user ? JSON.parse(cookies?.user) : null;
const userInfo = await getCurrentUser();
//   console.log("user info from cookies", userInfo);

  if (!userInfo) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.next(); // Allow access to login or register pages
    } else {
      console.log("from middleware");
      return NextResponse.redirect(
        new URL(
          `http://localhost:3000/login?redirectPath=${pathname}`,
          request.url
        )
      );
    }
  }
  console.log(userInfo?.role||null);    


  console.log(userInfo);

if (userInfo?.role && roleBasedPrivateRoutes[userInfo?.role as Role]) {
    const routes = roleBasedPrivateRoutes[userInfo?.role as Role];
    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }

  return NextResponse.redirect(new URL("/", request.url));
};

export const config = {
  matcher: [
  
    "/login",
    "/signUp",
    "/subscriptionPurchase",
    "/payment",
    "/subscription",
    "/my-profile",
    "/billing",
  ],
};
