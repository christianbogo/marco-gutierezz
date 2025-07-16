import React from "react";

interface BunnyAccessInfoProps {
  libraryId: string;
  videoId: string;
}

const BunnyAccessInfo: React.FC<BunnyAccessInfoProps> = ({
  libraryId,
  videoId,
}) => {
  return (
    <div
      style={{
        background: "#f8f9fa",
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "20px",
        margin: "20px 0",
        fontFamily: "Roboto, sans-serif",
      }}
    >
      <h3 style={{ color: "#333", marginBottom: "15px" }}>
        🔧 Bunny.net Configuration Needed
      </h3>

      <p style={{ marginBottom: "15px", color: "#666" }}>
        Your videos are returning <strong>403 Forbidden</strong> errors. This
        typically means:
      </p>

      <ul style={{ marginBottom: "20px", color: "#666" }}>
        <li>
          <strong>Domain restrictions:</strong> Your Bunny Stream library may
          only allow specific domains
        </li>
        <li>
          <strong>Token authentication:</strong> Videos might require signed
          URLs
        </li>
        <li>
          <strong>Processing incomplete:</strong> Videos may still be encoding
        </li>
        <li>
          <strong>Library settings:</strong> Public access might be disabled
        </li>
      </ul>

      <div
        style={{
          background: "#fff",
          padding: "15px",
          borderRadius: "4px",
          border: "1px solid #eee",
        }}
      >
        <h4 style={{ margin: "0 0 10px 0", color: "#333" }}>Debug Info:</h4>
        <p style={{ margin: "5px 0", fontSize: "0.9rem", color: "#666" }}>
          <strong>Library ID:</strong> {libraryId}
        </p>
        <p style={{ margin: "5px 0", fontSize: "0.9rem", color: "#666" }}>
          <strong>Video ID:</strong> {videoId}
        </p>
        <p style={{ margin: "5px 0", fontSize: "0.9rem", color: "#666" }}>
          <strong>Test URL:</strong>
          <a
            href={`https://vz-${libraryId}.b-cdn.net/${videoId}/thumbnail.jpg`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#e0ac1c",
              textDecoration: "none",
              marginLeft: "5px",
            }}
          >
            Open thumbnail
          </a>
        </p>
      </div>

      <div
        style={{
          marginTop: "15px",
          padding: "10px",
          background: "#e8f4fd",
          borderRadius: "4px",
        }}
      >
        <p style={{ margin: 0, fontSize: "0.9rem", color: "#0066cc" }}>
          💡 <strong>Quick Fix:</strong> In your Bunny Stream dashboard, check:
          <br />• Library Settings → Security → Allowed Referrers (add
          localhost:3000)
          <br />• Library Settings → Security → Enable Token Authentication
          (disable for testing)
        </p>
      </div>
    </div>
  );
};

export default BunnyAccessInfo;
