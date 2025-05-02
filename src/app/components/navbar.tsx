import Link from "next/link";
import { getCurrentUser } from "../lib/session";
import Logout from "./logout";
const Navbar = async () => {

    const user = await getCurrentUser();

    return (
        <nav className="flex items-center justify-between p-4 border-b border-b-white shadow-[0_5px_10px_rgba(255,255,255,0.75)]">
            <Link className="text-2xl font-bold" href="/">Simple Blog</Link>
            <ul className="flex space-x-4">
                <li>
                    <Link href="/blogs">View Blogs</Link>
                </li>
                {user?.name ? (
                    <Logout />
                ) : (
                    <li>
                        <Link href="/api/auth/signin">Login</Link>
                    </li>
                )}

            </ul>


        </nav>
    );
};

export default Navbar;