import Link from "next/link";

export function Footer() {
  return (
    <footer className='container mx-auto py-4 px-12 flex flex-wrap flex-col sm:flex-row max-w-screen-lg text-gray-500 text-sm leading-5 items-center'>
      <p className='text-center sm:text-left'>
        © 2025{" "}
        <Link href='https://easycv.cn' target='_blank' className='hover:underline'>
          xieyezi
        </Link>
      </p>
    </footer>
  );
}
