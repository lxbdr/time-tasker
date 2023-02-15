import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { Fragment } from "react";
import DarkMode from "./DarkMode";


const navigation = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Create", href: "/projects/create" },
  { name: "Templates", href: "/tasks/templates" },
];

export default function NavMenu() {
  return (
    <Popover as="header" id={"site-header"} className="relative z-40 w-full shadow lg:fixed">
      <div className="bg-slate-900 pt-3 pb-3">
        <nav
          className="relative mx-auto flex max-w-7xl items-center justify-between px-4  sm:px-6"
          aria-label="Global"
        >
          <div className="flex flex-1 items-center">
            <div className="flex w-full items-center justify-between md:w-auto">
              <Link href="/">
                <span className="sr-only">Eli Media</span>
                {/* LOGO HERE  */}
                {/* <Image
                    priority
                    className="h-8 w-auto sm:h-8"
                    width="400"
                    height="104"
                    src=""
                    alt=""
                  /> */}
              </Link>

              {/* Dropdown Toggle */}
              <div className="-mr-2 flex items-center md:hidden">
                <DarkMode />
                <Popover.Button className="focus-ring-inset ml-4 inline-flex items-center justify-center rounded-md bg-slate-200 p-2 text-slate-800 focus:ring-2 focus:ring-white dark:bg-slate-600 dark:text-slate-200">
                  <span className="sr-only">Hauptmenu öffnen</span>
                  <MenuIcon className="h-8 w-8" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>

            {/* Desktop Nav Items */}
            <div className="hidden space-x-4 lg:space-x-8 md:ml-10 md:flex">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}

                  className="pt-2 text-base font-medium text-white hover:text-gray-300">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-6">
            <DarkMode />
          </div>
        </nav>
      </div >

      {/* Mobile Nav */}
      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 z-10 origin-top transform pl-1 pr-2 pt-3  transition md:hidden"
        >
          <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5 dark:bg-slate-800">
            <div className="flex items-center justify-between bg-slate-900 px-5 pt-4 pb-3">
              <div className="-mt-4 -ml-2 ">
                <Link href="/">
                  Test
                  {/* SAME LOGO HERE */}
                  {/* <Image
                      className="h-8 w-auto sm:h-8"
                      width="400"
                      height="104"
                      src=""
                      alt=""
                    /> */}
                </Link>
              </div>

              <div className="-mr-5 -mt-4">
                <DarkMode />
                <Popover.Button className="ml-4 inline-flex items-center justify-center rounded-md bg-slate-200 p-2.5 text-slate-800 hover:bg-gray-100  dark:bg-slate-600 dark:text-gray-200 ">
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-7 w-7" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="pt-8 pb-6">
              <div className="space-y-1 px-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 dark:text-slate-200 dark:hover:bg-slate-700 dark:hover:text-white"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-4 px-5">
                {/* BUTTONS HERE ? */}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
