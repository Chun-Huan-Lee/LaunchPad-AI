
import { GoogleGenAI, Type } from "@google/genai";
import type { MarketingAssets } from '../types';

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable is not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const marketingAssetSchema = {
  type: Type.OBJECT,
  properties: {
    projectName: { type: Type.STRING, description: "A catchy, marketable name for the project." },
    taglines: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
      description: "Three short, punchy taglines for the project."
    },
    elevatorPitch: {
      type: Type.STRING,
      description: "A compelling 2-3 sentence paragraph describing the project's value proposition."
    },
    features: {
      type: Type.ARRAY,
      description: "A list of 3 key features.",
      items: {
        type: Type.OBJECT,
        properties: {
          emoji: { type: Type.STRING, description: "A single, relevant emoji for the feature." },
          name: { type: Type.STRING, description: "A short name for the feature." },
          description: { type: Type.STRING, description: "A one-sentence description of the feature's benefit." },
        },
        required: ["emoji", "name", "description"]
      }
    },
    socialPosts: {
      type: Type.OBJECT,
      properties: {
        twitter: {
          type: Type.ARRAY,
          items: { type: Type.STRING },
          description: "Two engaging and concise tweets to announce the project, including relevant hashtags."
        },
        linkedin: {
          type: Type.ARRAY,
          items: { type: Type.STRING },
          description: "One professional LinkedIn post to announce the project, targeting a professional audience."
        }
      },
      required: ["twitter", "linkedin"]
    }
  },
  required: ["projectName", "taglines", "elevatorPitch", "features", "socialPosts"]
};


export const generateMarketingAssets = async (projectDescription: string): Promise<MarketingAssets> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: `Generate a complete marketing kit for the following software project. Use the user's description as the source of truth. Be creative and professional. Project Description: "${projectDescription}"`,
      config: {
        systemInstruction: "You are an expert marketing and branding assistant for software developers. Your task is to generate compelling marketing copy for their projects based on their description. Provide your output in a valid JSON format, strictly adhering to the provided schema. Do not output markdown.",
        responseMimeType: "application/json",
        responseSchema: marketingAssetSchema,
        temperature: 0.8,
        topP: 0.9,
      },
    });

    const jsonText = response.text.trim();
    
    // Sometimes the model might wrap the JSON in markdown backticks, so we clean it up.
    const cleanedJsonText = jsonText.replace(/^```json\n?/, '').replace(/\n?```$/, '');

    const parsedAssets: MarketingAssets = JSON.parse(cleanedJsonText);
    return parsedAssets;
  } catch (error) {
    console.error("Error generating marketing assets from Gemini:", error);
    throw new Error("Failed to parse or receive data from the AI service.");
  }
};
