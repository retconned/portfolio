import type { NextPage } from "next";
import Head from "next/head";
import Nav from "../components/Nav";

const Home: NextPage = () => {
  return (
    <div className="flex flex-row bg-black">
      <Head>
        <title>who am i - retconned</title>
        <meta property="og:title" content="who am i - retconned" key="title" />
      </Head>
      <Nav />
      <div className="flex h-auto min-h-screen bg-black">
        <div className="w-full bg-black px-8 pt-20 md:pl-8 md:pt-10 ">
          <article className="prose prose-a:text-pink-500">
            <h1 className="text-4xl font-bold text-white">who am i 🤔</h1>
            <div className="w-[55vw] font-medium text-stone-300">
              <p>
                Hello, I go by retconned, I am a passionate web developer &
                designer with 5 years of design experience and User Interface
                Engineering. My expertise lies in the design, development, and
                delivery of astonishing products.
              </p>
              <p>
                I am equipped with a diverse yet a promising skill-set that
                enables me to effectively self-manage during independent
                projects as well as collaborate as part of a production team.
                Utilizing my creative and artistic skills, I am proficient in
                designing and developing interactive and beautiful yet intuitive
                responsive websites & interfaces.
              </p>
              <p>
                I also have experience creating prototypes Utilizing my creative
                and artistic skills allow me to create interactive and beautiful
                yet intuitive responsive websites & interfaces. I also have
                experience creating prototypes for various web applications.
              </p>
              <p>
                My diverse skillset including my experience as a graphic & a
                motion design allows me to provide various services, help across
                multiple departments and work closely with any team across
                multiple fields. I have experience working on various frameworks
                and languages including: React.js, Next.js, JavaScript,
                HTML5/CSS3, TailwindCSS, Typescript, MongoDB and more!
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Home;
