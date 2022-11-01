import Link from 'next/link'
export default function Button(){
    return (
        <>
        <button className="bg-blue-600 text-white text-lg py-3 px-10   "><Link className='border-t border-t-white py-2 ' href="#">Contact us</Link></button>
        </>
    )
}