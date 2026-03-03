🎬 AI Movie Insight Builder

A full-stack AI-powered movie analytics application built using Next.js (App Router) and the OpenAI API.

Users can enter an IMDb Movie ID (e.g., tt0133093) to retrieve structured movie metadata along with AI-generated audience sentiment insights.

🚀 Live Deployment

🔗 Live URL: movie-insight-stir.vercel.app

🎯 Core Features

IMDb ID input with strict format validation

Fetches movie metadata:

Title

Poster

Cast

Release Year

IMDb Rating

Plot Summary

Simulated structured audience reviews

AI-generated:

3–4 line audience sentiment summary

Overall sentiment classification (Positive / Mixed / Negative)

Loading states & graceful error handling

Fully responsive design (mobile + desktop)

Production-ready API structure

🛠 Tech Stack
Frontend

Next.js (App Router)

TypeScript

Tailwind CSS

Backend

Next.js API Routes

OMDb API (movie metadata)

OpenAI API (sentiment analysis)

Zod (backend validation)

🧠 Why OMDb?

OMDb was chosen over TMDB because:

Direct support for IMDb ID lookup (i=ttXXXXXXX)

No ID conversion layer required

Lightweight and fast integration

Ideal for an 8–10 hour engineering constraint

This reduced unnecessary complexity while maintaining reliability.

🤖 AI Integration Design

The OpenAI API is used to:

Analyze structured audience reviews

Generate a concise sentiment summary

Classify overall audience reaction as:

Positive

Mixed

Negative

Stability Measures

Reviews are limited before sending to AI (token control)

Strict JSON structure enforced

Safe JSON parsing

Graceful fallback if quota/rate-limit occurs

This ensures production resilience.

🧩 Architecture Overview

Client → API Route → OMDb → Review Simulation → OpenAI → Structured JSON → UI

Engineering Principles Applied

Separation of concerns

Service-layer abstraction

Backend validation using Zod

Type-safe interfaces

Controlled AI prompt design

Error-first API handling

Environment variable security

📌 Assumptions & Design Decisions

OMDb does not provide audience reviews.

Scraping IMDb was avoided due to:

Stability concerns

Rate limits

Deployment reliability

Simulated structured reviews were implemented to:

Ensure deterministic AI input

Maintain production safety

Avoid scraping violations

This approach prioritizes stability, clarity, and maintainability within assignment constraints.

👨‍💻 Author

Shankar Jangid
B.Tech (Information Technology)
Full-Stack Developer