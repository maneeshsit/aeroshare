// Appends a booking row to the Aeroshare Google Sheet via the connector gateway.
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const SPREADSHEET_ID = "1IwfpRMZuiiDVek_2ClbUMO7fBK98v6W6Pzgbd9ry-w0";
const SHEET_TAB = "Aeroshare";
const AIRCRAFT = "HX50";
const AIRCRAFT_CAPACITY = 4;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const body = await req.json();
    const {
      name, email, phone, departure, destination, date, time,
      passengers, serviceType,
    } = body ?? {};

    const paxNum = Number(passengers);
    if (!Number.isFinite(paxNum) || paxNum < 1 || paxNum > AIRCRAFT_CAPACITY) {
      return new Response(
        JSON.stringify({ error: `Passengers must be between 1 and ${AIRCRAFT_CAPACITY} (excluding pilot).` }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }
    if (!name || !email || !phone || !departure || !destination || !date) {
      return new Response(
        JSON.stringify({ error: "Missing required fields." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    const GSHEETS_KEY = Deno.env.get("GOOGLE_SHEETS_API_KEY");
    if (!LOVABLE_API_KEY || !GSHEETS_KEY) {
      return new Response(
        JSON.stringify({ error: "Sheets connector not configured." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const flightId = `HX50-${Date.now().toString().slice(-6)}`;
    const price = paxNum * 1200; // simple mock pricing
    const row = [
      new Date().toISOString(),
      name, email, phone,
      departure, destination,
      `${date}${time ? " " + time : ""}`,
      paxNum,
      flightId,
      `$${price}`,
      AIRCRAFT,
      AIRCRAFT_CAPACITY,
      serviceType ?? "",
    ];

    const url = `https://connector-gateway.lovable.dev/google_sheets/v4/spreadsheets/${SPREADSHEET_ID}/values/${SHEET_TAB}!A1:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;
    const resp = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "X-Connection-Api-Key": GSHEETS_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ values: [row] }),
    });

    if (!resp.ok) {
      const text = await resp.text();
      console.error("Sheets append failed", resp.status, text);
      return new Response(
        JSON.stringify({ error: "Failed to append to sheet.", detail: text }),
        { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    return new Response(
      JSON.stringify({ ok: true, flightId, price, capacity: AIRCRAFT_CAPACITY }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ error: (err as Error).message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
