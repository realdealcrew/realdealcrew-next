const HL_BASE = "https://services.leadconnectorhq.com";

function getHeaders() {
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.HIGHLEVEL_API_KEY}`,
    Version: "2021-07-28",
  };
}

export interface AssessmentPayload {
  name?: string;
  email: string;
  score: number;
  bandKey: string;
  bandName: string;
  bandTag: string;
}

/**
 * Upsert a contact by email, update RDC diagnostic custom fields,
 * and apply the correct band tag. Idempotent — safe to call multiple times.
 */
export async function syncAssessmentToHighLevel(
  payload: AssessmentPayload,
  locationId: string
): Promise<void> {
  const { name, email, score, bandName, bandTag } = payload;

  // 1. Upsert contact
  const upsertRes = await fetch(`${HL_BASE}/contacts/upsert`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify({
      locationId,
      email,
      name: name ?? undefined,
      tags: [
        "Assessment – Deal Intake – Completed",
        bandTag,
      ],
      customFields: [
        { key: "rdc_diagnostic_name", field_value: "Deal Intake Operations Assessment" },
        { key: "rdc_diagnostic_score", field_value: String(score) },
        { key: "rdc_diagnostic_band", field_value: bandName },
        {
          key: "rdc_diagnostic_completed_at",
          field_value: new Date().toISOString(),
        },
        { key: "rdc_diagnostic_version", field_value: "1.0" },
      ],
    }),
  });

  if (!upsertRes.ok) {
    const text = await upsertRes.text();
    throw new Error(`HighLevel upsert failed: ${upsertRes.status} — ${text}`);
  }
}
