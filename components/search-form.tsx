"use client";

import { FiSearch } from "react-icons/fi";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

export const SearchForm = ({ className }: { className?: string }) => {
  const [query, setQuery] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimating(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [isAnimating]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (!query.trim()) {
      setIsAnimating(true);
      event.preventDefault();
    }
  };

  return (
    <form
      action="/search"
      method="GET"
      onSubmit={handleSubmit}
      className={cn(
        "relative",
        className,
        isAnimating ? "animate-shake" : "animate-none"
      )}
    >
      <input
        id="q"
        name="q"
        type="search"
        className="input pr-28"
        placeholder="Search for a product..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="submit"
        className="absolute top-0 right-0 h-12.5 flex justify-center items-center rounded-r-lg px-10 py-2.5 text-sm uppercase font-bold transition-colors duration-300 cursor-pointer btn-accent"
      >
        <FiSearch size={20} />
      </button>
    </form>
  );
};
