import type { NextPage } from "next";
import Button from "../components/elements/button";
import Layout from "../components/layouts";
import { CashIcon } from "@heroicons/react/solid";

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <section className="mt-52  flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{" "}
          <a href="https://nextjs.org" className="text-primary-accent">
            Footsprint
          </a>
        </h1>
        <p className="mt-3 mb-24 text-2xl">
          Get started by editing{" "}
          <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
            pages/index.js
          </code>
        </p>

        <Button
          Icon={CashIcon}
          text="Buy"
          onClick={() => {
            console.log("Clicked Buy");
          }}
          dialog={{
            Icon: CashIcon,
            title: "Buy",
            message: "Are you sure you want to buy this item?",
            buttons: [
              {
                text: "Cancel",
                variant: "transparent",
                onClick: () => {
                  console.log("Cancelled");
                },
              },
              {
                text: "Yes",
                onClick: () => {
                  console.log("Success");
                },
              },
            ],
          }}
        />
      </section>
    </Layout>
  );
};

export default Home;
