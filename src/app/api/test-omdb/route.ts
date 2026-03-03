import { NextResponse } from "next/server";
import { fetchMovieFromOMDb } from "@/lib/omdb";

export async function GET() {
  try {
    const movie = await fetchMovieFromOMDb("tt0133093");

    return NextResponse.json(movie);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}