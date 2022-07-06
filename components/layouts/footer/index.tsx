import Image from "next/future/image";
import type { FunctionComponent } from "react";

const Footer: FunctionComponent = () => {
  return (
    <footer>
      <div>
        <section className="flex h-24 w-full items-center justify-center border-t">
          <a
            className="flex items-center justify-center"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer">
            Powered by{" "}
            <Image src="/vercel.svg" alt="Vercel Logo" className="ml-2 h-4" />
          </a>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
