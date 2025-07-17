import React, { useState } from "react";
import BunnyVideoPlayer from "../comps/BunnyVideoPlayer";

const TestPage: React.FC = () => {
  const videoId = "efd61be6-5b9b-4108-af09-591be75f8371";
  const libraryId = "468791";
  const cdnHostname = "vz-7d7fbb17-7a5.b-cdn.net"; // Correct CDN hostname
  const pullZone = "vz-7d7fbb17-7a5";

  const [selectedApproach, setSelectedApproach] = useState<"iframe" | "direct">(
    "iframe"
  );

  // Generate the URLs that will be attempted (using correct CDN hostname)
  const videoUrls = [
    `https://${cdnHostname}/${videoId}/playlist.m3u8`, // HLS
    `https://${cdnHostname}/${videoId}/play_720p.mp4`, // Direct MP4
    `https://${cdnHostname}/${videoId}/play_480p.mp4`, // Lower quality fallback
    `https://${cdnHostname}/${videoId}/play_360p.mp4`, // Even lower quality
  ];

  // Bunny.net recommended iframe URL
  const iframeUrl = `https://iframe.mediadelivery.net/embed/${libraryId}/${videoId}`;

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "1200px",
        margin: "0 auto",
        color: "#ffffff",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ color: "#ffffff", marginBottom: "30px" }}>
        Bunny.net Video Test Page
      </h1>

      <div style={{ marginBottom: "30px" }}>
        <h2 style={{ color: "#ffffff", marginBottom: "15px" }}>
          Testing Approach
        </h2>
        <div
          style={{
            background: "#1a1a1a",
            padding: "15px",
            borderRadius: "5px",
            border: "1px solid #333",
            color: "#ffffff",
          }}
        >
          <div style={{ marginBottom: "15px" }}>
            <label style={{ marginRight: "20px" }}>
              <input
                type="radio"
                name="approach"
                value="iframe"
                checked={selectedApproach === "iframe"}
                onChange={(e) =>
                  setSelectedApproach(e.target.value as "iframe" | "direct")
                }
                style={{ marginRight: "5px" }}
              />
              <strong>Iframe Embed (Recommended by Bunny.net)</strong>
            </label>
            <label>
              <input
                type="radio"
                name="approach"
                value="direct"
                checked={selectedApproach === "direct"}
                onChange={(e) =>
                  setSelectedApproach(e.target.value as "iframe" | "direct")
                }
                style={{ marginRight: "5px" }}
              />
              <strong>Direct File Access (Custom Integration)</strong>
            </label>
          </div>
          <p>
            <strong>Iframe:</strong> Uses Bunny's built-in player (easier, more
            reliable)
            <br />
            <strong>Direct:</strong> Uses your custom player component (more
            control, but requires proper security setup)
          </p>
        </div>
      </div>

      <div style={{ marginBottom: "30px" }}>
        <h2 style={{ color: "#ffffff", marginBottom: "15px" }}>
          Video Player Test
        </h2>
        <div style={{ maxWidth: "800px" }}>
          {selectedApproach === "iframe" ? (
            <iframe
              src={iframeUrl}
              width="100%"
              height="400"
              style={{ border: "none", borderRadius: "5px" }}
              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
              allowFullScreen
              title="Bunny.net Video Player"
            />
          ) : (
            <BunnyVideoPlayer
              videoId={videoId}
              libraryId={libraryId}
              cdnHostname={cdnHostname}
              className="test-video"
            />
          )}
        </div>
      </div>

      <div style={{ marginBottom: "30px" }}>
        <h2 style={{ color: "#ffffff", marginBottom: "15px" }}>
          Debug Information
        </h2>
        <div
          style={{
            background: "#1a1a1a",
            padding: "15px",
            borderRadius: "5px",
            border: "1px solid #333",
            color: "#ffffff",
          }}
        >
          <p>
            <strong>Video ID:</strong> {videoId}
          </p>
          <p>
            <strong>Library ID:</strong> {libraryId}
          </p>
          <p>
            <strong>CDN Hostname:</strong> {cdnHostname}
          </p>
          <p>
            <strong>Pull Zone:</strong> {pullZone}
          </p>
          <p>
            <strong>Iframe URL:</strong>{" "}
            <a
              href={iframeUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#4FC3F7", textDecoration: "underline" }}
            >
              {iframeUrl}
            </a>
          </p>
          <p>
            <strong>Video Title:</strong> Adrian Milanio - All Alone
          </p>
        </div>
      </div>

      <div style={{ marginBottom: "30px" }}>
        <h2 style={{ color: "#ffffff", marginBottom: "15px" }}>
          Direct File URLs (Custom Integration)
        </h2>
        <div
          style={{
            background: "#1a1a1a",
            padding: "15px",
            borderRadius: "5px",
            border: "1px solid #333",
            color: "#ffffff",
          }}
        >
          <p>
            <strong>
              These URLs are used when "Direct File Access" is selected:
            </strong>
          </p>
          <ol>
            {videoUrls.map((url, index) => (
              <li key={index} style={{ marginBottom: "10px" }}>
                <div>
                  <strong>Format:</strong>{" "}
                  {index === 0
                    ? "HLS (playlist.m3u8)"
                    : `MP4 (${
                        url.includes("720p")
                          ? "720p"
                          : url.includes("480p")
                          ? "480p"
                          : "360p"
                      })`}
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "#ccc",
                    wordBreak: "break-all",
                  }}
                >
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#4FC3F7", textDecoration: "underline" }}
                  >
                    {url}
                  </a>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div style={{ marginBottom: "30px" }}>
        <h2 style={{ color: "#ffffff", marginBottom: "15px" }}>
          🚨 Troubleshooting Direct File Access
        </h2>
        <div
          style={{
            background: "#2d1f1f",
            padding: "15px",
            borderRadius: "5px",
            border: "1px solid #ff6b6b",
            color: "#ffffff",
          }}
        >
          <p>
            <strong>
              If direct file access fails, check these Bunny.net settings:
            </strong>
          </p>
          <ol>
            <li>
              <strong>Disable "Block direct URL file access"</strong> in Stream
              settings
            </li>
            <li>
              <strong>Disable "CDN token authentication"</strong> temporarily
            </li>
            <li>
              <strong>Check "Allowed Referrers"</strong> - add your domain or
              leave empty for testing
            </li>
            <li>
              <strong>Enable "MP4 Fallback"</strong> in encoding settings
              (required for MP4 URLs)
            </li>
            <li>
              <strong>Verify videos are fully processed</strong> - check
              processing status
            </li>
          </ol>
          <p>
            <strong>📍 Where to find these settings:</strong>
          </p>
          <ul>
            <li>Bunny Dashboard → Stream → Your Library → Security tab</li>
            <li>Bunny Dashboard → Stream → Your Library → Player tab</li>
            <li>Bunny Dashboard → Stream → Your Library → Encoding tab</li>
          </ul>
        </div>
      </div>

      <div style={{ marginBottom: "30px" }}>
        <h2 style={{ color: "#ffffff", marginBottom: "15px" }}>
          Manual URL Testing
        </h2>
        <div
          style={{
            background: "#1a1a1a",
            padding: "15px",
            borderRadius: "5px",
            border: "1px solid #333",
            color: "#ffffff",
          }}
        >
          <p>
            Click the direct file URLs above to test access. Expected responses:
          </p>
          <ul>
            <li>
              <strong>✅ Working:</strong> HLS downloads as text playlist, MP4s
              play/download
            </li>
            <li>
              <strong>❌ 403 Forbidden:</strong> Security settings blocking
              access
            </li>
            <li>
              <strong>❌ 404 Not Found:</strong> Video not processed or wrong
              URLs
            </li>
            <li>
              <strong>❌ CORS errors:</strong> Domain not in allowed referrers
            </li>
          </ul>
        </div>
      </div>

      <div style={{ marginBottom: "30px" }}>
        <h2 style={{ color: "#ffffff", marginBottom: "15px" }}>
          Browser Console
        </h2>
        <div
          style={{
            background: "#1a1a1a",
            padding: "15px",
            borderRadius: "5px",
            border: "1px solid #333",
            color: "#ffffff",
          }}
        >
          <p>
            Check the browser console (F12) for any error messages during video
            loading.
          </p>
          <p>Common error patterns:</p>
          <ul>
            <li>
              <strong>NS_BINDING_ABORTED:</strong> Request cancelled (often
              security-related)
            </li>
            <li>
              <strong>CORS errors:</strong> Cross-origin restrictions
            </li>
            <li>
              <strong>403 Forbidden:</strong> Authentication/authorization
              issues
            </li>
            <li>
              <strong>404 Not Found:</strong> Resource doesn't exist or wrong
              URL
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 style={{ color: "#ffffff", marginBottom: "15px" }}>
          🔑 API Key Integration (Advanced)
        </h2>
        <div
          style={{
            background: "#1a1a1a",
            padding: "15px",
            borderRadius: "5px",
            border: "1px solid #333",
            color: "#ffffff",
          }}
        >
          <p>If you need authenticated access, your API key can be used for:</p>
          <ul>
            <li>
              <strong>Stream API:</strong> Get video metadata and processing
              status
            </li>
            <li>
              <strong>Signed URLs:</strong> Generate time-limited authenticated
              URLs
            </li>
            <li>
              <strong>Token authentication:</strong> Secure direct file access
            </li>
          </ul>
          <p>
            <strong>Next steps if direct access continues to fail:</strong>
          </p>
          <ol>
            <li>Try the iframe approach (should work immediately)</li>
            <li>
              Contact Bunny support to verify your library security settings
            </li>
            <li>
              Consider implementing signed URL authentication with your API key
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
