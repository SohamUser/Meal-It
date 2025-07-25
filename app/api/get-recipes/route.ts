// app/api/get-recipes/route.ts (Next.js 13+)
import { GoogleGenAI, Type } from "@google/genai"
import { NextResponse } from "next/server"

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!, // Never hardcode in prod!
})

export async function POST(req: Request) {
  const { items } = await req.json()

  const resp = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `You are a recipe recommender. Given these fridge items: ${items}, generate at least 3-4 detailed recipes. Include clear, step-by-step cooking instructions like microwave time/temp or pressure cooker whistles.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            recipeName: { type: Type.STRING },
            ingredients: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            instruction: { type: Type.STRING }
          }
        }
      }
    }
  })

  return NextResponse.json(resp.text);
}
