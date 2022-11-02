import Link from 'next/link'
export default function Button({text, styles}){
    return (
        <>
        <button className={`bg-blue-600 text-white text-lg py-3 px-10 hover:bg-white hover:text-blue-light font-bold ${styles} `}><Link className=' py-2 ' href="#">{text}</Link></button>
        </>
    )
}