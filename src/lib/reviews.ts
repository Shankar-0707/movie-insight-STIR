export const generateSimulatedReviews = (
  rating: string
): string[] => {
  const numericRating = parseFloat(rating);

  const positiveReviews = [
    "Absolutely loved the performances and storytelling.",
    "A cinematic masterpiece with stunning visuals.",
    "The character development was deep and engaging.",
    "One of the best films I've seen in years.",
    "Brilliant direction and powerful emotional impact."
  ];

  const mixedReviews = [
    "Good movie overall but had pacing issues.",
    "Strong performances but predictable storyline.",
    "Enjoyable, though it felt slightly too long.",
    "Interesting concept but execution could be better.",
    "Not bad, but not groundbreaking either."
  ];

  const negativeReviews = [
    "Disappointing and poorly executed.",
    "The plot felt weak and underdeveloped.",
    "Characters lacked depth and realism.",
    "Overhyped and failed to deliver.",
    "Struggled to stay engaged throughout."
  ];

  if (numericRating >= 7.5) {
    return [...positiveReviews];
  }

  if (numericRating >= 5) {
    return [...mixedReviews];
  }

  return [...negativeReviews];
};