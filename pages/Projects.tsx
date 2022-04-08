import type { NextPage } from "next";
import Image from "next/image";
import Project from "./Components/Project";
import FeaturedProject from "./Components/FeaturedProject";
import Nav from "./Components/Nav";

const Projects: NextPage = () => {
  return (
    <div className="h-screen bg-black">
      {/* <div className=" flex flex-row divide-x-2 divide-red-600">
        <Nav />
      </div> */}
      <Nav />

      {/* <div className=" flex flex-col space-y-4 bg-red-500">
        <Project />
        <Project />
      </div> */}
      {/* <div className="flex w-full flex-row flex-wrap justify-around bg-red-300 p-2 ">
        <FeaturedProject />
        <FeaturedProject />
        <FeaturedProject />
      </div> */}
    </div>
  );
};

export default Projects;
