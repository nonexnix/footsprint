import type { NextPage } from "next";
import Layout from "../components/layouts";

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <section className="flex h-full w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{" "}
          <a className="text-accent" href="https://nextjs.org">
            Footsprint
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          Get started by editing{" "}
          <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
            pages/index.js
          </code>
        </p>
      </section>
    </Layout>
  );
};

export default Home;
