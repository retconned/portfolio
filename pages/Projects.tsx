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
      name: "web3-penguin-house",
      link: "/web3-penguin-house",
      description:
        "The penguin house is a dApp that serve as a front-end minter for ERC-721 contracts & as a token gallery for all token holders.",
      language: "Javascript",
    },
    {
      name: "kingyo-bot",
      link: "/kingyo-bot",
      description:
        "Kingyo is a NFT discord bot that showcases the latest NFT sale from a targeted collection/smart contract using the OpenSea API.",
      language: "Javascript",
    },
    {
      name: "Single page minter",
      link: "/frontend-minter",
      description: "Single page minting solution using Chakra-ui.",
      language: "Javascript",
    },
    {
      name: "treeverse-web",
      link: "/treeverse-web",
      description:
        "Treeverse is a top-down open-world classless MMORPG built for mobile with social features and an emphasis on cooperative gameplay.",
      language: "Typescript",
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
