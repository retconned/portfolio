import type { NextPage, NextComponentType } from "next";
import Image from "next/image";

const Project: NextComponentType = (props) => {
  return (
    <div className="">
      <div className="flex h-24 w-11/12 items-center divide-x divide-stone-900 rounded-md border border-stone-900 bg-black font-mono text-white duration-150 hover:bg-stone-900">
        <div className="flex h-full w-1/12 min-w-fit flex-col items-center justify-center  px-4">
          name <span className="text-stone-600">lanyard</span>
        </div>
        <div className="flex h-full w-1/12 min-w-fit flex-col items-center justify-center  px-4">
          tech <span className="text-stone-600">Typescript</span>
        </div>
        <div className="flex h-full w-10/12 flex-col items-start justify-center  px-4">
          description
          <span className="text-stone-600">
            Ut voluptua lorem invidunt sed eos. Dolore duo gubergren clita stet
            diam ea et sadipscing no, lorem at consetetur magna.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Project;
