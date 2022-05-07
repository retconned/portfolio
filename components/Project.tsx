import type { NextPage, NextComponentType } from "next";
import Image from "next/image";
interface ProjectComponentProps {
  title: string;
  tech: string;
  description: string;
}
const Project: NextPage<ProjectComponentProps> = ({
  title,
  tech,
  description,
}) => {
  return (
    <div className="">
      <div className="flex h-24 w-11/12 items-center divide-x divide-stone-900 rounded-md border border-stone-900 bg-black font-mono text-white duration-150 hover:bg-stone-900">
        <div className="flex h-full w-1/12 min-w-fit flex-col items-center justify-center  px-4">
          name <span className="text-stone-600">{title}</span>
        </div>
        <div className="flex h-full w-1/12 min-w-fit flex-col items-center justify-center  px-4">
          tech <span className="text-stone-600">{tech}</span>
        </div>
        <div className="flex h-full w-10/12 flex-col items-start justify-center  px-4">
          <span className="text-stone-600">{description}</span>
        </div>
      </div>
    </div>
  );
};

export default Project;
