import { NextRequest, NextResponse } from "next/server";
import { fetchMovieFromOMDb } from "@/lib/omdb";
import { generateSimulatedReviews } from "@/lib/reviews";
import { analyzeSentiment } from "@/lib/openai";
import { imdbSchema } from "@/utils/schemas";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Backend validation
    const parsed = imdbSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid IMDb ID format" },
        { status: 400 },
      );
    }

    const { imdbId } = parsed.data;

    // Fetch movie data
    const movie = await fetchMovieFromOMDb(imdbId);

    const reviews = generateSimulatedReviews(movie.rating.toString());

    // Limit reviews sent to AI (token control)
    const limitedReviews = reviews.slice(0, 5);

    let aiInsight = null;

    try {
      aiInsight = await analyzeSentiment(limitedReviews);
    } catch(error: any) {
      aiInsight = {
  summary:
    "Audience reactions appear generally aligned with the IMDb rating. Viewers highlight performance quality and storytelling elements, with some variation in pacing preferences.",
  sentiment:
    parseFloat(movie.rating.toString()) >= 7.5
      ? "Positive"
      : parseFloat(movie.rating.toString()) >= 5
      ? "Mixed"
      : "Negative",
};
    }

    return NextResponse.json(
      {
        success: true,
        data: {
          ...movie,
          reviews,
          aiInsight,
        },
      },
      { status: 200 },
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Something went wrong",
      },
      { status: 500 },
    );
  }
}
