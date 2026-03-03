// As Frotend Validation is not going enough
// Users can bypass the frontend and can hit API directly
// so we are going to use ZOD

import { z } from "zod";

export const imdbSchema = z.object({
  imdbId: z
    .string()
    .regex(/^tt\d{7,9}$/, "Invalid IMDb ID format"),
});

// ZOD gives structured error messages and automatically validates request body