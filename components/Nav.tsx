import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { AiOutlineTwitter, AiFillGithub, AiOutlineMenu } from "react-icons/ai";
import { FiGlobe } from "react-icons/fi";
import useSound from "use-sound";

const Nav: NextPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const iconColor = "#84cc16";

  const [switchPageAudio] = useSound("/beep.mp3");

  const playAudio = () => {
    switchPageAudio();
  };

  return (
    <>
      <nav className="fixed top-0 z-10 h-full w-full divide-y divide-stone-900 md:hidden">
        <div className="flex h-[8vh] w-full flex-row items-center justify-between bg-black bg-opacity-80 px-8 backdrop-blur">
          <div className="font-semibold text-white">retconned</div>
          <button
            className="text-white"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            {menuOpen ? <CgClose size={26} /> : <AiOutlineMenu size={26} />}
          </button>
        </div>

        {menuOpen ? (
          <div className="h-[92vh] w-full bg-black bg-opacity-80 px-8 py-8 backdrop-blur">
            <div className="">
              <div className="flex flex-col space-y-2">
                <div className="flex flex-row items-center space-x-2 text-white ">
                  <FiGlobe size={24} color={iconColor} />
                  <p className="text-md duration-150 hover:text-stone-400">
                    Interwebs
                  </p>
                </div>
              </div>
              <ul className="text-md h-[50vh] space-y-2 pt-4 ">
                <li>
                  <Link href="/">
                    <a
                      onClick={playAudio}
                      className="text-stone-200 duration-150 hover:text-white"
                    >
                      about
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/Projects">
                    <a
                      onClick={playAudio}
                      className="text-stone-200 duration-150 hover:text-white"
                    >
                      projects
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/Contact">
                    <a
                      onClick={playAudio}
                      className="text-stone-200 duration-150 hover:text-white"
                    >
                      contact & ect.
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex w-full justify-between px-16">
              <Link href="https://twitter.com/retconned_" passHref>
                <a className="text-stone-300 duration-150 hover:text-white">
                  <AiOutlineTwitter size={26} />
                </a>
              </Link>
              <Link href="https://github.com/retconned/" passHref>
                <a className="text-stone-300 duration-150 hover:text-white">
                  <AiFillGithub size={26} />
                </a>
              </Link>
            </div>
          </div>
        ) : (
          ""
        )}
      </nav>
      <nav className="hidden h-screen flex-row md:sticky md:bottom-0 md:flex">
        <div className="flex h-auto w-60 flex-col justify-between bg-black p-8 font-semibold text-stone-200 ">
          <div className="">
            <div className="flex flex-col space-y-2 ">
              <p className=" text-xl text-white">retconned</p>
              <div className="flex flex-row items-center space-x-2 pl-2 ">
                <FiGlobe size={20} color={iconColor} />
                <p className="text-sm text-stone-300 duration-150 hover:text-stone-200">
                  Interwebs
                </p>
              </div>
            </div>
            <ul className="text-md space-y-4 pt-4 opacity-80">
              <li>
                <Link href="/">
                  <a
                    onClick={playAudio}
                    className="text-stone-200 duration-150 hover:text-white"
                  >
                    about
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/Projects">
                  <a
                    onClick={playAudio}
                    className="text-stone-200 duration-150 hover:text-white"
                  >
                    projects
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/Contact">
                  <a
                    onClick={playAudio}
                    className="text-stone-200 duration-150 hover:text-white"
                  >
                    contact & ect.
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex w-full justify-between px-8">
            <Link href="https://twitter.com/retconned_" passHref>
              <a className="text-stone-300 duration-150 hover:text-white">
                <AiOutlineTwitter size={26} />
              </a>
            </Link>
            <Link href="https://github.com/retconned/" passHref>
              <a className="text-stone-300 duration-150 hover:text-white">
                <AiFillGithub size={26} />
              </a>
            </Link>
          </div>
        </div>
        <div className="w-[1px] bg-stone-800" />
      </nav>
    </>
  );
};

export default Nav;
