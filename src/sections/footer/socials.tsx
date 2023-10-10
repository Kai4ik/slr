// icons
import { AiFillInstagram } from "react-icons/ai/index";
import {
  FaFacebookF,
  FaTiktok,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa/index";
import type { IconType } from "react-icons/lib";

const socials = [
  { linkUrl: "https://www.facebook.com/LetsStopAIDS/", title: "Facebook" },
  {
    linkUrl: "https://www.instagram.com/letsstopaids/",
    title: "Instagram",
  },
  { linkUrl: "https://www.tiktok.com/@/", title: "Tiktok" },
  { linkUrl: "https://twitter.com/LetsStopAIDS/", title: "Twitter" },
  {
    linkUrl: "https://www.youtube.com/channel/UCTkxmYJZ-IgIosZhlguNtFg",
    title: "YouTube",
  },
  {
    linkUrl: "https://www.linkedin.com/company/letsstopaids/",
    title: "LinkedIn",
  },
];

const matchSocialIcons = (
  hyGraphSocials: Array<{ linkUrl: string; title: string }>
): Array<{ icon: IconType; link: string; size: number; title: string }> => {
  const socialIcons: Array<{
    icon: IconType;
    link: string;
    size: number;
    title: string;
  }> = [];
  hyGraphSocials.forEach((elem) => {
    let icon = null;
    let size = 0;
    switch (elem.title.toLowerCase()) {
      case "instagram":
        icon = AiFillInstagram;
        size = 30;
        break;
      case "youtube":
        icon = FaYoutube;
        size = 30;
        break;
      case "tiktok":
        icon = FaTiktok;
        size = 25;
        break;
      case "facebook":
        icon = FaFacebookF;
        size = 25;
        break;
      case "twitter":
        icon = FaTwitter;
        size = 25;
        break;
      default:
        icon = FaLinkedin;
        size = 25;
    }
    socialIcons.push({
      link: elem.linkUrl,
      icon,
      size,
      title: elem.title,
    });
  });
  return socialIcons;
};

export default function SocialIcons(): JSX.Element {
  return (
    <div className="flex flex-col basis-2/6 space-y-2 lg:space-y-4">
      <div className={`font-paragraphs flex flex-wrap space-x-6`}>
        {matchSocialIcons(socials).map((elem, index) => (
          <a
            data-cy="sm-link"
            data-cy-sm-type={`${elem.title.toLowerCase()}`}
            key={index}
            href={elem.link}
            target="_blank"
            rel="external noreferrer"
            className="transition-colors duration-300 ease-in-out hover:text-[#FCB001]"
          >
            <elem.icon size={elem.size} title={elem.title} />
          </a>
        ))}
      </div>
    </div>
  );
}
