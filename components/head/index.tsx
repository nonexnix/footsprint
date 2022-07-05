import type { FunctionComponent } from "react";
import NextHead from "next/head";

interface Props {
  title: string;
}

const Head: FunctionComponent<Props> = ({ title }) => {
  return (
    <NextHead>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
};

export default Head;
