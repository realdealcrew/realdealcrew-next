import { NextRequest, NextResponse } from "next/server";
import { syncAssessmentToHighLevel, type AssessmentPayload } from "@/lib/highlevel";
import { bands } from "@/components/assessment/bandConfig";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, score, bandKey, bandName, bandTag } =
      body as AssessmentPayload & { bandKey: string };

    // Validate
    if (!email || typeof score !== "number") {
      return NextResponse.json(
        { error: "Missing required fields: email, score" },
        { status: 400 }
      );
    }

    const locationId = process.env.HIGHLEVEL_LOCATION_ID;
    if (!locationId) {
      console.error("HIGHLEVEL_LOCATION_ID is not set");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    // Resolve band if not provided
    const resolvedBand = bands.find((b) => b.key === bandKey);
    const resolvedBandName = bandName ?? resolvedBand?.name ?? "Unknown";
    const resolvedBandTag = bandTag ?? resolvedBand?.tagName ?? "Band – Unknown";

    await syncAssessmentToHighLevel(
      { name, email, score, bandKey, bandName: resolvedBandName, bandTag: resolvedBandTag },
      locationId
    );

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Assessment API error:", err);
    return NextResponse.json(
      { error: "Failed to process assessment submission" },
      { status: 500 }
    );
  }
}
