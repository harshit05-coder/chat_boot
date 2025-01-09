import Link from "next/link";
import { FaReact, FaLinkedin, FaGithub } from "react-icons/fa";

export default function NavBar() {
  const linksMap = [
    { name: "Website", href: "https://portfolio-five-kappa-66.vercel.app/", icon: FaReact },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/harshitsingh123/", icon: FaLinkedin },
    { name: "Github", href: "https://github.com/harshit05-coder", icon: FaGithub },
    
  ];
  return (
    <nav className="space-x-3 text-xl font-semibold ">
      {linksMap.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          target="blank"
          className="hover:text-blue-400"
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
