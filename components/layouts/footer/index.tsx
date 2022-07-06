import type { FunctionComponent } from "react";
import Image from "next/future/image";

const Footer: FunctionComponent = () => {
  return (
    <footer>
      <div>
        <section className="flex h-24 w-full items-center justify-center border-t">
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center">
            Powered by{" "}
            <Image src="/vercel.svg" alt="Vercel Logo" className="ml-2 h-4" />
          </a>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
