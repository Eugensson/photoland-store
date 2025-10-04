import { Socials } from "@/components/socials";
import { AdditionalInfo } from "@/components/additional-info";

export const Footer = () => {
  return (
    <footer className="pt-16 bg-primary">
      <div className="container">
        <div className="text-center">
          <h2 className="mb-6 h2 font-semibold uppercase">
            Subscrube to our newsletter
          </h2>
          <p className="text-white/70">
            Be the first to get the latest news about trends, promotions, and
            much more.
          </p>
        </div>
        <form className="my-14 w-full max-w-3xl mx-auto flex flex-col md:flex-row gap-5">
          <input
            type="text"
            placeholder="Your email address"
            className="input"
          />
          <button type="button" className="btn btn-accent min-w-37.5">
            Join
          </button>
        </form>
        <AdditionalInfo />
        <Socials />
      </div>
      <p className="py-10 border-t border-white/10 text-white/60 text-center text-sm">
        Copyright &copy; Photoland 2025. All rights reserved.
      </p>
    </footer>
  );
};
