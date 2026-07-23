import { ImageResponse } from "next/og";
import { profile } from "@/data/content";

export const runtime = "edge";
export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Code-generated OG image so social cards match the terminal theme exactly.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#0B0C0E",
          // satori supports a single linear-gradient; the grid CSS it can't parse.
          backgroundImage:
            "linear-gradient(135deg, #0B0C0E 0%, #101317 60%, #0B0C0E 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            fontFamily: "monospace",
            fontSize: 26,
            color: "#D4FF4F",
            letterSpacing: 4,
          }}
        >
          {"> ~/swapnil-jain"}
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 92,
              fontWeight: 700,
              color: "#ECEDEE",
              letterSpacing: -4,
              lineHeight: 1.02,
            }}
          >
            {profile.name}
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 34,
              color: "#9AA1AC",
              maxWidth: 900,
              lineHeight: 1.25,
            }}
          >
            {profile.headline}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: "monospace",
            fontSize: 24,
            color: "#5A616B",
          }}
        >
          <span style={{ color: "#9AA1AC" }}>{profile.role}</span>
          <span>{profile.location}</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
