import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
  return (
    <Link href="/">
      <Image src="/assets/logo.png" width={181} height={24} alt="logo" />
    </Link>
  );
};
