import { Groq } from "groq-sdk";
import { NextRequest, NextResponse } from "next/server";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(request: NextRequest) {
  console.log("API Route called:", new Date().toISOString());

  try {
    const { prompt } = await request.json();
    console.log("Received prompt:", prompt?.substring(0, 100));

    // For testing, return a mock response first
    if (prompt === "test") {
      console.log("Returning test response");
      return NextResponse.json({
        businessName: "Test Business",
        businessType: "ecommerce",
        businessDescription: "Test description",
        selectedFeatures: ["about", "contact"],
        colorScheme: "#3b82f6",
        additionalInfo: "Test mode"
      });
    }

    if (!prompt || prompt.trim().length === 0) {
      return NextResponse.json(
        { error: "Prompt tidak boleh kosong" },
        { status: 400 }
      );
    }

    // Return intelligent mock response based on prompt content
    console.log("Returning intelligent mock response");
    const lowerPrompt = prompt.toLowerCase();

    const businessName = lowerPrompt.includes("toko") || lowerPrompt.includes("store") || lowerPrompt.includes("elektronik") ? "Toko Online" :
                        lowerPrompt.includes("restoran") || lowerPrompt.includes("restaurant") || lowerPrompt.includes("kafe") || lowerPrompt.includes("cafe") ? "Restoran Modern" :
                        lowerPrompt.includes("jasa") || lowerPrompt.includes("service") || lowerPrompt.includes("services") ? "Jasa Profesional" :
                        lowerPrompt.includes("portfolio") ? "Portfolio Kreatif" :
                        "Website Anda";

    const businessType = lowerPrompt.includes("toko") || lowerPrompt.includes("store") || lowerPrompt.includes("elektronik") ? "ecommerce" :
                        lowerPrompt.includes("restoran") || lowerPrompt.includes("restaurant") || lowerPrompt.includes("kafe") || lowerPrompt.includes("cafe") ? "restaurant" :
                        lowerPrompt.includes("jasa") || lowerPrompt.includes("service") || lowerPrompt.includes("services") ? "services" :
                        lowerPrompt.includes("portfolio") ? "portfolio" :
                        lowerPrompt.includes("blog") ? "blog" :
                        "business";

    const colorScheme = lowerPrompt.includes("biru") ? "#3b82f6" :
                       lowerPrompt.includes("hijau") ? "#10b981" :
                       lowerPrompt.includes("merah") ? "#ef4444" :
                       lowerPrompt.includes("ungu") ? "#8b5cf6" :
                       lowerPrompt.includes("orange") || lowerPrompt.includes("jingga") ? "#f97316" :
                       "#3b82f6";

    const selectedFeatures = [];
    if (lowerPrompt.includes("tentang") || lowerPrompt.includes("about")) selectedFeatures.push("about");
    if (lowerPrompt.includes("produk") || lowerPrompt.includes("showcase") || lowerPrompt.includes("galeri") || lowerPrompt.includes("gallery")) selectedFeatures.push("showcase");
    if (lowerPrompt.includes("testimoni") || lowerPrompt.includes("review") || lowerPrompt.includes("testimonials")) selectedFeatures.push("testimonials");
    if (lowerPrompt.includes("kontak") || lowerPrompt.includes("contact")) selectedFeatures.push("contact");
    if (lowerPrompt.includes("tim") || lowerPrompt.includes("team")) selectedFeatures.push("team");
    if (lowerPrompt.includes("blog") || lowerPrompt.includes("artikel") || lowerPrompt.includes("articles")) selectedFeatures.push("blog");
    if (lowerPrompt.includes("menu") && (businessType === "restaurant")) selectedFeatures.push("menu");

    // Default features if none specified
    if (selectedFeatures.length === 0) {
      selectedFeatures.push("about", "showcase", "contact", "cta");
    }

    return NextResponse.json({
      businessName,
      businessType,
      businessDescription: `Website ${lowerPrompt.includes("modern") ? "modern" : "profesional"} untuk ${businessName.toLowerCase()}`,
      selectedFeatures,
      colorScheme,
      additionalInfo: `Dibuat berdasarkan prompt: "${prompt.substring(0, 50)}${prompt.length > 50 ? '...' : ''}" (Mode demo)`,
      _mock: true
    });

  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Terjadi kesalahan server",
      },
      { status: 500 }
    );
  }
}
