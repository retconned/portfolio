import type { NextPage } from "next";
import Nav from "../components/Nav";
import Head from "next/head";
const Contact: NextPage = () => {
  return (
    <div className="flex h-auto min-h-screen bg-black">
      <Head>
        <title>contact me - retconned</title>
        <meta
          property="og:title"
          content="contact me - retconned"
          key="title"
        />
      </Head>
      <Nav />
      <div className="w-full bg-black px-8 pt-20 md:pl-8 md:pt-10">
        <article className="prose prose-a:text-lime-500">
          <h1 className="text-4xl font-bold text-white">/ect</h1>
          <h1 className="text-xl font-bold text-white">Thanks</h1>
          <p className="font-medium text-stone-300 ">
            Thanks for visiting. I hope you enjoyed your stay. The source code
            for this website is available at{" "}
            <a
              href="https://github.com/retconned/"
              target="_blank"
              rel="noreferrer"
            >
              retconned/portfolio
            </a>
            .
          </p>
          <h1 className="text-xl font-bold text-white">Contact</h1>
          <p className="text-base font-medium text-stone-300">
            You can email me @{" "}
            <a href="mailto:retconned@gmail.com">retcnned@gmail.com</a>. <br />
            If it&apos;s an emergency, I&apos;m most responsive through Twitter
            DMs or via Discord{" "}
            <a className="cursor-pointer text-lime-500 underline">
              retconned#2804
            </a>{" "}
            .
          </p>
        </article>
      </div>
    </div>
  );
};

export default Contact;
