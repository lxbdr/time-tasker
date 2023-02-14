import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "../utils/api";

import "../styles/globals.css";
import Link from "next/link";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <header id={"site-header"}>
        <nav>
          <ul className={`flex gap-3`}>
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={`/projects`}>Projects</Link>
            </li>
            <li>
              <Link href={`/tasks/templates`}>Task Templates</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
