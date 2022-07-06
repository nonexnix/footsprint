import type { NextPage } from "next";
import Button from "../components/elements/button";
import Layout from "../components/layouts";
import { CashIcon } from "@heroicons/react/solid";

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <section className="flex h-full w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{" "}
          <a href="https://nextjs.org" className="text-accent">
            Footsprint
          </a>
        </h1>
        <p className="mt-3 text-2xl">
          Get started by editing{" "}
          <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
            pages/index.js
          </code>
        </p>
        <Button
          onClick={() => {}}
          dialogbox={{
            Icon: CashIcon,
            title: "Payment",
            message: "Please confirm your payment",
            action: {
              name: "Confirm",
              onClick: () => {},
            },
          }}>
          Buy
        </Button>
      </section>
    </Layout>
  );
};

export default Home;
