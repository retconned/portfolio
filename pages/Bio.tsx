import type { NextPage } from "next";
import Image from "next/image";

import Project from "../components/Project";
import FeaturedProject from "../components/FeaturedProject";
import Nav from "../components/Nav";

const Projects: NextPage = () => {
  return (
    <div className="flex h-screen bg-black text-stone-300">
      <Nav />
      <div>
        <div className="flex w-full flex-col flex-wrap justify-around bg-red-900 p-2">
          <p className="font-bold text-white">this is a bolder text</p>
          <p>
            Dolor at sea et labore eirmod rebum labore, eos justo et erat
            dolores et consetetur dolore est, tempor sed clita.
          </p>

          <p>
            What I Do Phin. 20 y/o developer, innovator and investor. I design,
            build and publish products of quality and reliability. Currently,
            I&apos;m a co-founder and developer at Giggl. I specialize in
            scalable real-time systems & networking, then usually pair that with
            React for the frontend. In my free time, I invest in and help
            startups with strategy, development, fundraising and more. Got a big
            descision to make? I&apos;m always down to chat to new founders. A
            note about networking Network engineering sounds like a mundane and
            boring topic, but it&apos;s actually pretty esoteric and interesting
            when applied on a global scale - it&apos;s the backbone of how
            today&apos;s society communicates and operates, yet there&apos;s not
            many young developers engaged in the topic. Contrary to popular
            belief, the internet still works and operates on very loose trust
            between people and organizations - I plan to help change this for
            the better. About Giggl Giggl is revolutionizing togetherness online
            using multiplayer browsers. You can spin up a Giggl
            &quot;portal&quot; with someone on the other side of the world, and
            you&apos;ll be able to individually control a browser that we host
            in the cloud which you can use to watch movies together, collaborate
            on projects and everything else the www offers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
