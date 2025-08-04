import { FaGithub, FaTelegram, FaPhone } from "react-icons/fa";
import type { SocialLinks } from "../../types/socialLinks";

const socialLinks: SocialLinks[] = [
  {
    id: 1,
    url: "https://github.com/demlew1",
    icon: (
      <FaGithub className="size-4 duration-200 text-gray-100 hover:text-cyan-400" />
    ),
  },
  {
    id: 2,
    url: "https://t.me/sevsni",
    icon: (
      <FaTelegram className="size-4 duration-200 text-gray-100 hover:text-cyan-400" />
    ),
  },
  {
    id: 3,
    url: "tel:+251983334785",
    icon: (
      <FaPhone className="size-4 duration-200 text-gray-100 hover:text-cyan-400" />
    ),
  },
];

export default function SocialLinks() {
  return (
    <ul className="flex flex-row space-x-4">
      {socialLinks.map((link) => {
        const { id, url, icon } = link;
        return (
          <li key={id}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              {icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
