import NextAuth from "next-auth/next";

const handler = NextAuth({
  providers: [],
});

export const GET = handler;
export const POST = handler;
