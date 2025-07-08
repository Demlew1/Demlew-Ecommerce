import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import type { SocialLinks } from "../../types/socialLinks";
const socialLinks: SocialLinks[] = [
  {
    id: 1,
    url: "https://www.facebook.com",
    icon: <FaGithub className="size-4 duration-200 text-gray-100 " />,
  },
  {
    id: 2,
    url: "https://x.com",
    icon: <FaLinkedin className="size-4 duration-200 text-gray-100" />,
  },
  {
    id: 3,
    url: "https://youtube.com",
    icon: <FaTelegram className="size-4 duration-200 text-gray-100 " />,
  },
  {
    id: 4,
    url: "https://www.instagram.com",
    icon: <FaInstagram className="size-4 duration-200 text-gray-100 " />,
  },
];
export default function SocialLinks() {
  return (
    <ul className="flex flex-row space-x-4">
      {socialLinks.map((link) => {
        const { id, url, icon } = link;
        return (
          <li key={id}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
