import { Logo } from "@/components/logo";
import { Cart } from "@/components/cart";
import { MobileNav } from "@/components/mobile-nav";
import { SearchForm } from "@/components/search-form";

export const Header = () => {
  return (
    <header className="fixed top-0 z-40 lg:relative xl:mb-7.5 py-6 w-full bg-primary">
      <div className="container">
        <div className="mb-4 xl:mb-0 flex lg:items-center justify-between gap-4">
          <MobileNav />
          <Logo />
          <SearchForm className="w-full xl:max-w-183.5 hidden xl:block" />
          <div className="flex items-center gap-2.5">
            <div className="hidden xl:block uppercase">
              Need help? 123 456 789
            </div>
            <Cart />
          </div>
        </div>
        <SearchForm className="xl:hidden" />
      </div>
    </header>
  );
};
