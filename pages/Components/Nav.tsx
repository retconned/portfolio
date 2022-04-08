import type { NextPage, NextComponentType } from "next";
import Image from "next/image";
import {
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
            <p className=" text-xl text-white">retconned</p>
            <div className="flex flex-row items-center space-x-2 ">
              <PaperPlaneTilt
                size={24}
                color={"rgb(255, 101, 178)"}
                weight="bold"
              />
              <p className="text-md duration-150 hover:text-stone-400">
                leeds , uk
              </p>
            </div>
          </div>
          <ul className="text-md space-y-2  pt-4 opacity-80">
            <li className="py-1 text-stone-300 duration-150 hover:text-white">
              bio
            </li>
            <li className="py-1 text-stone-300 duration-150 hover:text-white">
              projects
            </li>
            <li className="py-1 text-stone-300 duration-150 hover:text-white">
              tech
            </li>
            <li className="py-1 text-stone-300 duration-150 hover:text-white">
              contact & ect
            </li>
          </ul>
        </div>
        <div className="flex w-full justify-between ">
          <TwitterLogo size={28} />
          <CurrencyEth size={28} />
          <GithubLogo size={28} />
        </div>
      </div>
      <div className="w-[1px] bg-stone-800" />
    </div>
  );
};

export default Nav;
