import Link from 'next/link';

const Year = new Date().getFullYear();


export default function Footer() {
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">


        <div className="mt-8  pt-0 md:flex md:items-center md:justify-between">

          <div className="flex space-x-6 md:order-2">

          </div>
          <p className="mt-8 text-base text-gray-400 md:order-1 md:mt-0 ">
            &copy; {Year} Time Tasker |{" "}
            <Link href="">
              <span className="hover:text-white">Datenschutz</span>
            </Link>{" "}
            |{" "}
            <Link href="">
              <span className="hover:text-white">Impressum</span>
            </Link>{" "}
          </p>
        </div>
      </div>
    </footer>
  );
}
