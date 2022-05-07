import type { NextPage } from "next";
import Image from "next/image";

interface featuredProjectProps {
  name?: string;
  type?: string;
  iconLink?: string;
  role?: string;
  story?: string;
}

const FeaturedProject: NextPage<featuredProjectProps> = ({
  name,
  type,
  iconLink,
  role,
  story,
}) => {
  return (
    <div className="flex w-3/12 flex-col divide-y divide-stone-900  rounded-lg bg-black font-mono text-white duration-150 hover:bg-stone-900 ">
      <div className="group flex h-32 w-96 items-center space-x-4 p-4 ">
        <div className="flex aspect-square h-24 w-24 flex-grow-0 items-center justify-center rounded-lg bg-blue-500">
          icon
        </div>
        <div className="flex-0 flex h-24 flex-col items-start justify-center ">
          <div className="flex flex-row space-x-2">
            <p className="font-bold">{name}</p>
          </div>
          <p className=" text-stone-600">{type}</p>
        </div>
      </div>
      <div className="group flex h-60 flex-col justify-center  p-4 ">
        <div className="flex flex-col  py-2">
          <p className="mb-2 font-bold">Role</p>
          <p className=" text-stone-600"> {role} </p>
        </div>
        <div className="flex flex-col  py-2">
          <p className="mb-2 font-bold"> Story</p>
          <p className="text-stone-600 ">{story}</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;
