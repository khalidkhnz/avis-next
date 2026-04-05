import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0b",
          borderRadius: "40px",
        }}
      >
        <svg
          width="100"
          height="100"
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
      </div>
    ),
    { ...size }
  );
}
