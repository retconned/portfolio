import type { NextPage } from "next";

const Project: NextPage<ProjectComponentProps> = ({
  title,
  tech,
  description,
  languages,
  link,
}: any) => {
  return (
    <>
      <a
        className="flex w-80 cursor-pointer flex-col items-center justify-center divide-y divide-stone-900 rounded-md border border-stone-900 bg-black font-mono duration-150 hover:bg-stone-900 group-hover:bg-red-500 md:w-11/12 md:flex-row md:divide-x md:divide-y-0"
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        <div className="w-full px-4 py-4 text-center text-stone-600  md:flex md:h-24 md:w-[20%] md:flex-col md:items-start md:justify-center md:text-left">
          <p className="text-white">name</p>
          {title}
        </div>
        <div className="w-full px-4 py-4 text-center text-stone-600  md:flex md:h-24 md:w-2/12 md:min-w-fit md:flex-col md:items-start md:justify-center md:text-left">
          <p className=" text-white">tech</p>
          <div className="flex flex-row items-center justify-center space-x-2">
            <p>{tech}</p>
            <div>
              {languages.map((language: any, index: any) => {
                // console.log(language.name);
                if (language.name == tech) {
                  return (
                    <div
                      key={index}
                      className={` aspect-square h-2.5 w-2.5 rounded-full`}
                      style={{ backgroundColor: language.color }}
                      // className={`aspect-square h-2.5 w-2.5 rounded-full bg-red-300`}
                    />
                  );
                }
              })}
            </div>
          </div>
        </div>
        <div className="w-full px-4 py-4 text-center text-stone-600  md:flex md:h-24 md:flex-col md:items-start md:justify-center md:text-left">
          <p className="text-white">description</p>
          {description}
        </div>
      </a>
    </>
  );
};

export default Project;
