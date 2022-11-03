import Link from "next/link";
export default function Button({ text, styles }) {
  return (
    <>
      <button
        className={`btn bg-blue-600 hover:border-2 hover:border-blue-600 text-white text-lg py-3 px-10  hover:text-blue-light font-bold ${styles} `}
      >
        <Link className=" py-2 " href="#">
          {text}
        </Link>
      </button>
    </>
  );
}
