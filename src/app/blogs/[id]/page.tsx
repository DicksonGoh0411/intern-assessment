import { prisma } from '@/app/lib/db'
import React from 'react'
import Link from 'next/link'

const Page = async ({
    params,
}: {
    params: { id: string }
}) => {

    // Retrieving a single post
    const post = await prisma.post.findFirst({
        where: {
            id: params.id
        },
        include: {
            User: true
        }
    })

    if (!post) {
        return (
            <div className="max-w-3xl mx-auto p-6">
                <p className="text-white">Post not found</p>
            </div>
        )
    }

    return (
        <>
            <div className='flex justify-end p-2 mb-5'>
                <Link href="/blogs" className='bg-black border-2 border-white text-white px-4 py-2 rounded-md hover:bg-gray-500 transition-all duration-200 hover:-translate-y-1'>Back</Link>
            </div>
            <div className="max-w-3xl mx-auto p-6">
                <h1 className="text-3xl font-bold mb-4 text-white">{post.title}</h1>
                <div className="text-gray-500 mb-6">
                    {new Date(post.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}
                </div>
                <p className="text-gray-500">Written by: {post.User?.name}</p>
                <div className="text-white leading-7 mt-5 break-words">
                    {post.content}
                </div>
            </div>
        </>
    )
}

export default Page