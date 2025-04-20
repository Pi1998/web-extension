// app/api/pexels-images/route.js
import { createClient } from "pexels";
import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.PEXELS_API_KEY;
  const query = "scenes";
  if (!apiKey) {
    return NextResponse.json(
      { error: "Pexels API key not found in environment variables." },
      { status: 500 }
    );
  }

  const client = createClient(apiKey);

  try {
    const photos = await client.photos.search({ query, per_page: 20 });
    return NextResponse.json(photos.photos);
  } catch (error) {
    console.error("Error fetching Pexels images:", error);
    return NextResponse.json(
      { error: "Failed to fetch images from Pexels" },
      { status: 500 }
    );
  }
}
