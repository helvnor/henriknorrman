import { MdAlternateEmail } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { AiFillDiscord } from "react-icons/ai";
import { main } from "@/app/fonts";
import LinkCard from "./link-card";

export default function ContactSection() {
  return (
    <div
      className={`${main.className} flex flex-col py-16 px-5 md:p-16 gap-5 md:gap-8 text-3xl sm:text-4xl bg-bgDarkColour w-full max-w-[96.92ch]`}
    >
      <div className="flex flex-col gap-2">
        <h1 className="text-bgLightColour tracking-wide">External Links</h1>
        <p className="text-slate-200/70 text-sm sm:text-base max-w-[65ch]">
          Links to external websites (for those who prefer not to use the
          terminal). Feel free to connect with me via email, LinkedIn, or
          Discord. You can also explore my repositories on GitHub.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 mx-auto">
        <LinkCard
          title="GitHub"
          description="Explore my GitHub repositories."
          username="n0rrman"
          link="https://github.com/n0rrman/"
          featureColour="border-github"
          arrowColour="text-github"
          icon={<IoLogoGithub className="text-github" />}
        />
        <LinkCard
          title="Discord"
          description="Add me on Discord."
          username="n0rrman"
          link="https://discord.com/users/235864356980523009"
          featureColour="border-discord"
          arrowColour="text-discord"
          icon={<AiFillDiscord className="text-discord" />}
        />
        <LinkCard
          title="Email"
          description="Send me an old school email."
          username="email@henriknorrman.com"
          link="mailto:email@henriknorrman.com"
          featureColour="border-email"
          arrowColour="text-email"
          icon={<MdAlternateEmail className="text-email" />}
        />
        <LinkCard
          title="LinkedIn"
          description="Connect with me on LinkedIn."
          username="henrik-norrman"
          link="https://www.linkedin.com/in/henrik-norrman"
          featureColour="border-linkedin"
          arrowColour="text-linkedin"
          icon={<FaLinkedin className="text-linkedin" />}
        />
      </div>
    </div>
  );
}
