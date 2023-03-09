import type { NextPage } from "next";

import Project from "../components/Project";
import Nav from "../components/Nav";
import Head from "next/head";

const Projects: NextPage = ({ displayedProjects, languages }: any) => {
  return (
    <>
      <Head>
        <title>stuff i done - retconned</title>
        <meta
          property="og:title"
          content="stuff i done - retconned"
          key="title"
        />
      </Head>
      <div className="flex h-auto min-h-screen bg-black ">
        <div className="fixed">
          <Nav />
        </div>
        <div className="pl-8 pt-20 md:pl-[275px] md:pt-10">
          <div className="flex flex-col space-y-4 ">
            <p className="text-2xl font-medium text-white">
              Open souce projects
            </p>
            <div className=" flex flex-col space-y-4 ">
              {displayedProjects.map((project: any, index: number) => (
                <Project
                  key={index}
                  title={project.name}
                  tech={project.language}
                  description={project.description}
                  link={project.link}
                  languages={languages}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;

export async function getServerSideProps() {
  const displayedProjects = [
    {
      name: "gonzu",
      link: "https://github.com/retconned/gonzu",
      description:
        "gonzu is a data aggregator platform for call of duty warzone 2.0 loadouts that highlights the most popular builds used by leading streamers.",
      language: "Typescript",
    },
    {
      name: "kickchat-client",
      link: "https://github.com/retconned/kickchat-client",
      description:
        "a TypeScript wrapper for kick.com's WebSocket-based chat system that auto-creates new connections when needed.",
      language: "Typescript",
    },
    {
      name: "pnpm-turborepo-boilerplate",
      link: "https://github.com/retconned/pnpm-turborepo-boilerplate",
      description:
        "This is a basic configuration for a Turborepo setup that enables web app development with TypeScript, Tailwind CSS, and Prisma ORM, CVA (Class Variance Authority), and a shared UI component library between React and Next.js apps.",
      language: "Typescript",
    },
    {
      name: "treeverse-web",
      link: "https://github.com/retconned/treeverse-web",
      description:
        "Treeverse is a top-down open-world classless MMORPG built for mobile with social features and an emphasis on cooperative gameplay.",
      language: "Typescript",
    },
    {
      name: "web3-penguin-house",
      link: "https://github.com/retconned/web3-penguin-house",
      description:
        "The penguin house is a dApp that serve as a front-end minter for ERC-721 contracts & as a token gallery for all token holders.",
      language: "Javascript",
    },
    {
      name: "kingyo-bot",
      link: "https://github.com/retconned/kingyo-bot",
      description:
        "Kingyo is a NFT discord bot that showcases the latest NFT sale from a targeted collection/smart contract using the OpenSea API.",
      language: "Javascript",
    },
    {
      name: "Single page minter",
      link: "https://github.com/retconned/Single-page-minter",
      description: "Single page minting solution using Chakra-ui.",
      language: "Javascript",
    },
  ];

  const languages = [
    {
      name: "Typescript",
      color: "#7DD3FC",
    },
    {
      name: "Javascript",
      color: "#FDE047",
    },
    {
      name: "Solidity",
      color: "#D1D5DB",
    },
    {
      name: "Rust",
      color: "#FDA874",
    },
    {
      name: "Go",
      color: "#67E8F9",
    },
  ];
  return {
    props: {
      displayedProjects: displayedProjects,
      languages: languages,
    },
  };
}
