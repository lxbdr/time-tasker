import { type NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import Auth from "../components/Auth";

const SignIn: NextPage = () => {

  const { data: sessionData } = useSession();

  return (
    <>
      <Head>
        <title>Einloggen - Time Tasker</title>
        <meta name="description" content="Einloggen in die Time Tasker App." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="mb-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          {sessionData ? "Sign out" : "Sign in"}
        </h1>
        <Auth />
      </main>
    </>
  );
};

export default SignIn;


