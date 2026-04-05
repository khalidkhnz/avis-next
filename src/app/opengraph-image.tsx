import { ImageResponse } from "next/og";

export const alt = "Avis Media - Digital PR & Video Licensing Agency";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0b",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <svg
          width="80"
          height="80"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.5 46L32 18L43.5 46"
            stroke="#6366f1"
            stroke-width="3.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <line
            x1="24"
            y1="38"
            x2="40"
            y2="38"
            stroke="#6366f1"
            stroke-width="3.5"
            stroke-linecap="round"
          />
        </svg>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "40px",
          }}
        >
          <h1
            style={{
              fontSize: "64px",
              fontWeight: 300,
              color: "#fafafa",
              margin: 0,
              letterSpacing: "-1px",
            }}
          >
            Avis Media
          </h1>
          <p
            style={{
              fontSize: "24px",
              fontWeight: 300,
              color: "#a1a1aa",
              margin: "16px 0 0 0",
              letterSpacing: "4px",
              textTransform: "uppercase",
            }}
          >
            Digital PR & Video Licensing
          </p>
        </div>
      </div>
    ),
    { ...size }
  );
}
