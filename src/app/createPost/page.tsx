import CreateForm from '../components/form'
import Link from 'next/link'
const page = () => {
    return (
        <>
            <div className='items-center justify-center'>
                <div className='flex justify-between text-center p-2 mb-5'>
                    <h1 className='text-3xl font-bold mx-auto'>Write a new post</h1>
                    <Link href="/blogs" className='bg-black border-2 border-white text-white px-4 py-2 rounded-md hover:bg-gray-500 transition-all duration-200 hover:-translate-y-1'>Back</Link>
                </div>
                <CreateForm />
            </div>
        </>
    )

}

export default page