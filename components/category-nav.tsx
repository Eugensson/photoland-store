import Link from "next/link";

import { categoryList } from "@/lib/data";

export const CategoryNav = () => {
  return (
    <aside className="hidden xl:block">
      <div className="h-125 w-71.5 flex flex-col rounded-lg overflow-hidden bg-primary">
        <div className="py-4 flex items-center justify-center uppercase font-semibold text-primary bg-accent">
          Browse Categories
        </div>
        <ul className="p-6 flex flex-col gap-y-6">
          {categoryList.map((category) => (
            <li key={category}>
              <Link href={`/products/${category}`} className="uppercase">
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};
