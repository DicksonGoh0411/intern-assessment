import Link from "next/link"
import Card from "../components/card"

const page = () => {
    return (
        <>
            <div className="w-screen mx-auto">
                <h1 className='text-3xl font-bold mb-10'>Blogs page</h1>
                <div className="flex">
                    <Link href="/createPost" className="bg-black border-2 border-white text-white px-4 py-2 rounded-md hover:bg-gray-500 transition-all duration-200 hover:-translate-y-1">Create Post</Link>
                </div>

                <div className="container mx-auto grid items-center justify-center md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 px-4">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </>
    )
}

export default page