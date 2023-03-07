import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { Button, buttonVariants } from './Button';

const Year = new Date().getFullYear();


export default function Footer() {

  const { data: sessionData } = useSession();

  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">


        <div className="mt-8  pt-0 md:flex md:items-center md:justify-between">


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

          <div className="flex md:order-2">
            <Button className={buttonVariants({ variant: 'link', className: 'text-white' })} href="/signin/">{sessionData ? "Sign out" : "Sign in"}</Button>
          </div>

        </div>


      </div>

    </footer >
  );
}
