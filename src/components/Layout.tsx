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
      <main className="flex-grow min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
