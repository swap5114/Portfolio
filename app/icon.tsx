import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// Monogram favicon: lime "SJ" bracket mark on near-black — matches the theme.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0B0C0E",
          borderRadius: 12,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 34,
            fontWeight: 700,
            fontFamily: "monospace",
            color: "#D4FF4F",
            letterSpacing: -2,
          }}
        >
          SJ
        </div>
      </div>
    ),
    { ...size }
  );
}
