
import { GoogleGenerativeAI } from "@google/generative-ai";
import { CuratorInsight } from "../types";

export async function getCuratorInsight(title: string, description: string): Promise<CuratorInsight> {
  // Check if API key is available
  const apiKey = process.env.GEMINI_API_KEY;
  
  if (!apiKey || apiKey === 'PLACEHOLDER_API_KEY') {
    // Return mock data for demo purposes when API key is not set
    return {
      painting: `A harmonious blend of ancient wisdom and modern innovation representing ${title}`,
      analysis: `This research vertical bridges traditional Eastern practices with contemporary scientific methodologies, creating a unique approach to ${title.toLowerCase()} that honors both empirical evidence and time-tested wisdom.`,
      historicalContext: `The foundations of ${title.toLowerCase()} can be traced back to ancient civilizations where holistic approaches to human development were deeply integrated into daily life, evolving through centuries of practice and refinement.`,
      keyDetails: [
        `Development of evidence-based protocols for ${title.toLowerCase()} implementation`,
        `Integration with modern healthcare and wellness systems`,
        `Creation of scalable training programs for practitioners and researchers`
      ]
    };
  }

  try {
    // Initialize the Gemini API
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const prompt = `You are a high-level research consultant for SLSRF (Semporutkalai Life Science Research Foundation). 
    Provide a deep scientific and philosophical analysis of this mission vertical: "${title}". 
    Context: ${description}
    
    Please respond with a JSON object containing:
    - painting: A metaphorical description of this research area (1-2 sentences)
    - analysis: A deep bridge between Eastern wisdom and modern scientific research (2-3 sentences)
    - historicalContext: The origin and evolution of this practice in human history (2-3 sentences)
    - keyDetails: An array of exactly 3 specific research-driven outcomes or impact areas
    
    Format your response as valid JSON only, no markdown formatting.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    // Clean the response text to ensure it's valid JSON
    const cleanText = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    
    const parsedResponse = JSON.parse(cleanText);
    
    // Validate the response structure
    if (!parsedResponse.painting || !parsedResponse.analysis || !parsedResponse.historicalContext || !Array.isArray(parsedResponse.keyDetails)) {
      throw new Error("Invalid response structure from AI");
    }
    
    return parsedResponse;
  } catch (error) {
    console.error("Error fetching research insight:", error);
    
    // Return fallback data instead of throwing error
    return {
      painting: `A visionary representation of ${title} as a bridge between ancient wisdom and future possibilities`,
      analysis: `This research area represents SLSRF's commitment to integrating time-honored practices with cutting-edge scientific research, creating pathways for sustainable human development and environmental stewardship.`,
      historicalContext: `Rooted in centuries of Eastern philosophical traditions, this field has evolved to meet contemporary challenges while maintaining its core principles of holistic understanding and interconnectedness.`,
      keyDetails: [
        `Research validation of traditional practices through modern scientific methods`,
        `Development of certification programs and educational frameworks`,
        `Creation of practical applications for individual and community transformation`
      ]
    };
  }
}
