import type { FunctionComponent, ReactNode } from "react";
import { Fragment } from "react";
import Head from "next/head";
import Footer from "./footer";
import Header from "./header";

interface Props {
  children: ReactNode;
  title: string;
}

const Layout: FunctionComponent<Props> = ({ children, title }) => {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col [&>*>div]:mx-auto [&>*>div]:max-w-screen-wide">
        <Header />
        <main className="grow">
          <div>{children}</div>
        </main>
        <Footer />
      </div>
    </Fragment>
  );
};

export default Layout;
