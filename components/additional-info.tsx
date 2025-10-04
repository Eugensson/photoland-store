import Link from "next/link";

import { infoData } from "@/lib/data";

export const AdditionalInfo = () => {
  return (
    <ul className="mb-9 max-w-max mx-auto flex items-center gap-x-6 capitalize">
      {infoData.map(({ label, href }) => (
        <li key={label}>
          <Link
            href={href}
            className="text-base text-white/60 hover:text-white transition-colors duration-300"
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
};
