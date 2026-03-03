import OpenAI from "openai";
import { AIInsight } from "@/types/ai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const analyzeSentiment = async (
  reviews: string[],
): Promise<AIInsight> => {
  try {
    const prompt = `
You are a movie sentiment analysis engine.

Analyze the following audience reviews.

Return STRICT JSON ONLY in this format:
{
  "summary": "3-4 line audience sentiment summary",
  "sentiment": "Positive | Mixed | Negative"
}

Reviews:
${reviews.join("\n")}
`;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.2,
    });

    const content = response.choices[0].message.content;

    if (!content) {
      throw new Error("Empty AI response");
    }

    const parsed: AIInsight = JSON.parse(content);

    // Extra validation safeguard
    if (
      !parsed.summary ||
      !["Positive", "Mixed", "Negative"].includes(parsed.sentiment)
    ) {
      throw new Error("Invalid AI structure");
    }

    return parsed;
  } catch (error: any) {
    throw error;
  }
};
