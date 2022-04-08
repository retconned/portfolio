import type { NextPage, NextComponentType } from "next";
import Image from "next/image";
import {
  NavigationArrow,
  PaperPlaneTilt,
  GithubLogo,
  CurrencyEth,
  TwitterLogo,
} from "phosphor-react";

const Nav: NextComponentType = () => {
  return (
    <div className="flex flex-row">
      <div className="flex h-screen w-60 flex-col justify-between  bg-black p-8 font-semibold text-stone-200">
        <div>
          <div className="flex flex-col space-y-2 ">
            <div className=" text-xl text-white"> retconned ali</div>
            <div className="flex flex-row items-center space-x-2 ">
              <PaperPlaneTilt
                size={24}
                color={"rgb(255, 101, 178)"}
                weight="bold"
              />
              {/* < size={32} /> */}
              <div className="text-md duration-150 hover:text-stone-400">
                Location , UK
              </div>
            </div>
          </div>
          <div className="text-md space-y-2  pt-4 opacity-80">
            <div className="py-1 text-stone-300 duration-150 hover:text-white">
              bio
            </div>
            <div className="py-1 text-stone-300 duration-150 hover:text-white">
              what i done before
            </div>
            <div className="py-1 text-stone-300 duration-150 hover:text-white">
              technolgies?
            </div>
            <div className="py-1 text-stone-300 duration-150 hover:text-white">
              contact & ect
            </div>
          </div>
        </div>
        <div className="flex w-full justify-between ">
          <TwitterLogo size={28} />
          <CurrencyEth size={28} />
          <GithubLogo size={28} />
        </div>
      </div>
      <div className="w-[1px] bg-stone-800"></div>
    </div>
  );
};

export default Nav;
