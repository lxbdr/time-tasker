import { type NextPage } from "next";
import Head from "next/head";
import { Button } from "../components/Button";

import Container from "../components/Container";
import { api } from "../utils/api";

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
        <Container>
          <h1>Projects</h1>
          <Button href={`/projects/create`}>Create new project</Button>


        </Container>
      </main>
    </>
  );
};

export default Home;


