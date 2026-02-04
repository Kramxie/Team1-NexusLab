import { NextResponse } from "next/server";

// Turnstile secret key (server only). Read from env (`TURNSTILE_SECRET_KEY`).
const TURNSTILE_SECRET_KEY =
  process.env.TURNSTILE_SECRET_KEY || "0x4AAAAAACVgr8KNyGOoHsvBleHxSskDbjo";

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);

    if (!TURNSTILE_SECRET_KEY) {
      return NextResponse.json(
        { ok: false, message: "Server misconfigured: missing TURNSTILE_SECRET_KEY" },
        { status: 500 }
      );
    }

    const email = String(body?.email || "").trim();
    const token = String(body?.token || "").trim();
    const formspreeEndpoint = String(body?.formspreeEndpoint || "").trim();

    if (!email || !token || !formspreeEndpoint) {
      return NextResponse.json(
        { ok: false, message: "Missing email/token/endpoint." },
        { status: 400 }
      );
    }

    // Optional IP (helps verification)
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "";

    // Verify Turnstile token with Cloudflare
    const verifyRes = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          secret: TURNSTILE_SECRET_KEY,
          response: token,
          ip,
        }),
      }
    );

    const verifyData = await verifyRes.json().catch(() => null);

    if (!verifyData?.success) {
      return NextResponse.json(
        { ok: false, message: "CAPTCHA verification failed." },
        { status: 400 }
      );
    }

    // Forward to Formspree (your newsletter endpoint)
    const forwardRes = await fetch(formspreeEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
        _subject: "New newsletter subscription",
        source: "website-newsletter",
      }),
    });

    if (!forwardRes.ok) {
      const err = await forwardRes.json().catch(() => null);
      console.error("Formspree error:", err);
      return NextResponse.json(
        { ok: false, message: "Formspree failed to accept the request." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { ok: false, message: "Server error." },
      { status: 500 }
    );
  }
}
