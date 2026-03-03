import { MovieData } from "@/types/movie";
import { AIInsight } from "@/types/ai";
import Image from "next/image";

interface Props {
  movie: MovieData & {
    reviews: string[];
    aiInsight: AIInsight;
  };
}

export default function MovieDisplay({ movie }: Props) {
  return (
    <div className="mt-10 w-full max-w-5xl space-y-8">
      {/* Main Section */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Poster */}
        <div>
          <Image
            src={movie.poster.toString()}
            alt={movie.title.toString()}
            width={400}
            height={600}
            className="rounded-xl shadow-lg object-cover"
          />
        </div>

        {/* Metadata */}
        <div className="bg-zinc-900/60 backdrop-blur-md p-6 rounded-xl border border-zinc-800 shadow-lg space-y-6">
          {/* Title + Rating */}
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">{movie.title}</h2>

            <div className="flex items-center gap-3">
              <span className="text-zinc-400">{movie.year}</span>

              <span className="px-3 py-1 bg-yellow-400 text-black rounded-full text-sm font-semibold">
                ⭐ IMDb {movie.rating}
              </span>
            </div>
          </div>

          {/* Cast */}
          <div>
            <h3 className="font-semibold mb-3 text-zinc-300">Cast</h3>

            <div className="flex flex-wrap gap-2">
              {movie.cast.map((actor, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm bg-zinc-800 border border-zinc-700 rounded-full hover:bg-zinc-700 transition"
                >
                  {actor}
                </span>
              ))}
            </div>
          </div>
          {/* Plot */}
          <div className="bg-zinc-900 p-6 rounded-xl">
            <h3 className="font-semibold mb-2">Plot Summary</h3>
            <p className="text-zinc-300">{movie.plot}</p>
          </div>
        </div>
      </div>

    
      {/* AI Insight */}
      <div className="bg-gradient-to-r from-purple-700 to-indigo-700 p-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.01]">
        <h3 className="font-semibold mb-3 text-lg">AI Audience Insight</h3>

        <p className="mb-4 text-sm leading-relaxed">
          {movie.aiInsight.summary}
        </p>

        <span
          className={`px-4 py-2 rounded-full text-sm font-semibold ${
            movie.aiInsight.sentiment === "Positive"
              ? "bg-green-500 text-black"
              : movie.aiInsight.sentiment === "Negative"
                ? "bg-red-500 text-white"
                : "bg-yellow-400 text-black"
          }`}
        >
          Overall Sentiment: {movie.aiInsight.sentiment}
        </span>
      </div>
    </div>
  );
}
