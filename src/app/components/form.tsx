'use client'

import React, { useState } from 'react'

const CreateForm = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // Handle form submission here
        console.log({ title, content })
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
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                        rows={5}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Write your blog post content here"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full border-2 border-white bg-black text-white py-2 px-4 rounded-md transition-all duration-200 hover:-translate-y-1 hover:bg-gray-500"
                >
                    Create Post
                </button>
            </form>
        </div>
    )
}

export default CreateForm