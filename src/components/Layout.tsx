import Footer from "./Footer";
import NavMenu from "./NavMenu";


import type { ReactNode } from "react";
import React from "react";

interface Props {
  children?: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <NavMenu />
      <main className="flex-grow min-h-screen max-w-6xl m-auto mt-10 px-4">{children}</main>
      <Footer />
    </>
  );
}
