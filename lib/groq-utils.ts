export interface GroqWebsiteConfig {
  businessName: string;
  businessType: string;
  businessDescription: string;
  selectedFeatures: string[];
  colorScheme: string;
  additionalInfo?: string;
}

export async function generateWebsiteWithGroqPrompt(
  prompt: string
): Promise<GroqWebsiteConfig> {
  const response = await fetch("/api/generate-website-with-prompt", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Gagal generate website config");
  }

  return response.json();
}
