import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "../utils/api";
import Container from "../components/Container";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Time Tasker</title>
        <meta name="description" content="Time Tasker App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
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
        <Container>
          <h1>Projects</h1>
          <Link href={`/projects/create`}>Create new project</Link>
        </Container>
      </main>
    </>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
