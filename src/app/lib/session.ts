import { getServerSession } from "next-auth";
import { authOptions } from "./auth";


// Determine if the user is logged in
export async function getCurrentUser() {
    const session = await getServerSession(authOptions);

    return session?.user;
}