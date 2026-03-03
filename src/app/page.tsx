"use client";

import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import MovieDisplay from "@/components/MovieDisplay";
import Loader from "@/components/Loader";

export default function Home() {
  const [movie, setMovie] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (imdbId: string) => {
    setLoading(true);
    setError("");
    setMovie(null);

    try {
      const response = await fetch("/api/movie", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ imdbId }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to fetch movie");
      }

      setMovie(data.data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">
        AI Movie Insight Builder
      </h1>

      <SearchBar onSearch={handleSearch} loading={loading} />

      {loading && <Loader />}

      {movie && (
        <div className="animate-fadeIn">
          <MovieDisplay movie={movie} />
        </div>
      )}
    </main>
  );
}
