import Link from "next/link";

import { socialData } from "@/lib/data";

export const Socials = () => {
  return (
    <ul className="max-w-max mx-auto mb-16 flex items-center gap-x-6">
      {socialData.map(({ label, icon: Icon, href }) => (
        <li key={label}>
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${label} link`}
            className="text-white/60 hover:text-white transition-colors duration-300"
          >
            <Icon size={22} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
