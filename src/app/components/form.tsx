'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
const CreateForm = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const response = await fetch('/api/posts', {
                method: 'POST',
                body: JSON.stringify({ title, content })
            })

            if (response.status === 200) {
                const data = await response.json();
                router.push(`/blogs/${data.newPost.id}`);
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-4 space-y-4">
                <div className="space-y-2">
                    <label htmlFor="title" className="block text-lg font-medium text-white">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                        placeholder="Enter your post title"
                        required
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="content" className="block text-lg font-medium text-white">
                        Content
                    </label>
                    <textarea
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                        placeholder="Write your blog post content here"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-black text-white border-2 border-white py-2 px-4 rounded-md hover:bg-gray-500 transition-all duration-200"
                >
                    Create Post
                </button>
            </form>
        </div>
    )
}

export default CreateForm