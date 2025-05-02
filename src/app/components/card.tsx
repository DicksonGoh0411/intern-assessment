import Link from "next/link"
import { prisma } from '@/app/lib/db'

const Card = async () => {
    const posts = await prisma.post.findMany({
        orderBy: {
            createdAt: "desc"
        },
        include: {
            User: true
        }
    })

    return (
        <>
            {posts.map((post) => (
                <div key={post.id} className="max-w-sm rounded-lg border-4 border-white bg-black p-6 hover:-translate-y-1 transition-all duration-300">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                        {post.title}
                    </h5>
                    <p className="mb-3 font-normal text-white">
                        Written by: {post.User?.name}
                    </p>
                    <p className="mb-3 font-normal text-white line-clamp-3">
                        {post.content}
                    </p>
                    <Link href={`/blogs/${post.id}`} className="inline-flex items-center rounded-lg border-2 border-white bg-black px-3 py-2 text-center text-sm font-medium text-white transition-all duration-200 hover:bg-gray-500">
                        See More
                    </Link>
                </div>
            ))}
        </>
    )
}

export default Card