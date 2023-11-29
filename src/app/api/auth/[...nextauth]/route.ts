// API Route for Next Auth Connection

import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import NextAuth from "next-auth/next";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }

