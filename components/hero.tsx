import Link from "next/link";
import Image from "next/image";

import { MainSlider } from "@/components/main-slider";
import { CategoryNav } from "@/components/category-nav";

import promoImg1 from "@/public/assets/promo_img1.png";
import promoImg2 from "@/public/assets/promo_img2.png";

export const Hero = () => {
  return (
    <section className="mb-7.5 pt-36 lg:pt-0">
      <div className="container">
        <div className="flex flex-col xl:flex-row gap-y-7.5 xl:gap-x-7.5">
          <div>
            <CategoryNav />
          </div>
          <div className="w-full max-w-lg lg:max-w-183.5 mx-auto">
            <MainSlider />
          </div>
          <div className="h-125 w-full max-w-lg mx-auto flex flex-col gap-y-7.5">
            <div className="relative p-6 flex-1 h-62.5 grad rounded-lg overflow-hidden">
              <div className="max-w-36 h-full flex flex-col justify-center">
                <p className="mb-4 text-xl uppercase font-medium leading-tight">
                  Save 35% all dslr cameras
                </p>
                <Link
                  href="/"
                  className="uppercase text-accent hover:text-accent-hover transition-colors duration-300"
                >
                  Shop now
                </Link>
              </div>
              <Image
                src={promoImg1}
                alt="promo"
                className="absolute -top-2 -right-4 z-20"
              />
            </div>
            <div className="relative p-6 flex-1 h-62.5 grad rounded-lg overflow-hidden">
              <div className="max-w-36 h-full flex flex-col justify-center">
                <p className="mb-4 text-xl uppercase font-medium leading-tight">
                  Save 25% mirrorless cameras
                </p>
                <Link
                  href="/"
                  className="uppercase text-accent hover:text-accent-hover transition-colors duration-300"
                >
                  Shop now
                </Link>
              </div>
              <Image
                src={promoImg2}
                alt="promo"
                className="absolute top-4 -right-6 z-20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
