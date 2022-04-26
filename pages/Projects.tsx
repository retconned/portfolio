import type { NextPage } from "next";
import Image from "next/image";

import Project from "../components/Project";
import FeaturedProject from "../components/FeaturedProject";
import Nav from "../components/Nav";

const Projects: NextPage = () => {
  return (
    <div className="flex h-screen bg-black">
      <Nav />
      <div>
        <div className=" flex flex-col space-y-4 bg-red-500">
          <Project />
          <Project />
        </div>
        <div className="flex w-full flex-row flex-wrap justify-around bg-red-300 p-2 ">
          <FeaturedProject />
          <FeaturedProject />
          <FeaturedProject />
        </div>
      </div>
    </div>
  );
};

export default Projects;
