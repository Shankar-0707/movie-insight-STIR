"use client";

import { useState } from "react";

interface Props {
  onSearch: (imdbId: string) => void;
  loading: boolean;
}

export default function SearchBar({ onSearch, loading }: Props) {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSearch(input.trim());
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-3 w-full max-w-xl"
    >
      <input
        type="text"
        placeholder="Enter IMDb ID (e.g. tt0133093)"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-700 focus:outline-none focus:border-white"
      />

      <button
        type="submit"
        disabled={loading}
        className="px-6 py-3 rounded-lg bg-white text-black font-semibold disabled:opacity-50"
      >
        {loading ? "Loading..." : "Search"}
      </button>
    </form>
  );
}