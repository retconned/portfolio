import type { NextPage } from "next";
import { ArrowSquareOut } from "phosphor-react";

const FeaturedProject: NextPage<featuredProjectProps> = ({
  name,
  type,
  iconLink,
  role,
  story,
}) => {
  return (
    <div className="my-4 flex h-fit w-80 cursor-pointer  flex-col items-center justify-between divide-y divide-stone-900 rounded-md border border-stone-900 bg-black font-mono text-white duration-150 hover:bg-stone-900 md:mx-4 md:w-96 md:max-w-3xl md:flex-col md:divide-y">
      <div className="flex h-[40%] w-full flex-row items-center p-4">
        <div className="h-16 w-16 rounded-md bg-pink-300" />
        <div className="px-4">
          <div className="flex flex-row items-center space-x-1">
            <p>{name}</p>
            <ArrowSquareOut size={14} />
          </div>
          <p className="text-stone-600">{type}</p>
        </div>
      </div>
      <div className="h-[60%] min-h-[250px] w-full space-y-4 px-4 py-8 text-stone-600">
        <div className="">
          <p className="font-semibold text-white">Role</p>
          <p>{role}</p>
        </div>
        <div className="">
          <p className="font-semibold text-white">What</p>
          <p className="">{story}</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;
