export { default } from "next-auth/middleware";

export const config = {
    matcher: ["/createPost"], // Add the routes that require authentication
};
