import Link from "next/link"

const Card = () => {
    return (
        <div className="max-w-sm rounded-lg border-5 border-white bg-black p-6 hover:-translate-y-1 transition-all duration-300">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                Card Title
            </h5>
            <p className="mb-3 font-normal text-white">
                Written by:
            </p>
            <Link href={`/blogs/id`} className="inline-flex items-center rounded-lg border-2 border-white bg-black px-3 py-2 text-center text-sm font-medium text-white transition-all duration-200 hover:bg-gray-500">
                See More
            </Link>
        </div>
    )
}

export default Card