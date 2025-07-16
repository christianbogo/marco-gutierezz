import React, { useState, useRef, useEffect } from "react";

interface BunnyVideoPlayerProps {
  videoId: string;
  libraryId: string;
  poster?: string;
  className?: string;
}

const BunnyVideoPlayer: React.FC<BunnyVideoPlayerProps> = ({
  videoId,
  libraryId,
  poster,
  className,
}) => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Try multiple URL formats
  const videoUrls = [
    `https://vz-${libraryId}.b-cdn.net/${videoId}/playlist.m3u8`, // HLS
    `https://vz-${libraryId}.b-cdn.net/${videoId}/play_720p.mp4`, // Direct MP4
    `https://vz-${libraryId}.b-cdn.net/${videoId}/play_480p.mp4`, // Lower quality fallback
    `https://vz-${libraryId}.b-cdn.net/${videoId}/play_360p.mp4`, // Even lower quality
  ];

  const handleVideoLoad = () => {
    setIsLoading(false);
    setError(null);
  };

  const handleVideoError = (
    e: React.SyntheticEvent<HTMLVideoElement, Event>
  ) => {
    console.error("Video error:", e);
    setIsLoading(false);
    setError(
      "Unable to load video. This may be due to Bunny.net access restrictions."
    );
  };

  useEffect(() => {
    // Reset states when videoId changes
    setError(null);
    setIsLoading(true);
  }, [videoId]);

  if (error) {
    return (
      <div className={`bunny-video-error ${className}`}>
        <div className="error-content">
          <div className="error-icon">⚠️</div>
          <h3>Video Unavailable</h3>
          <p>{error}</p>
          <details className="error-details">
            <summary>Technical Details</summary>
            <div className="tech-details">
              <p>
                <strong>Library ID:</strong> {libraryId}
              </p>
              <p>
                <strong>Video ID:</strong> {videoId}
              </p>
              <p>
                <strong>Attempted URLs:</strong>
              </p>
              <ul>
                {videoUrls.map((url, index) => (
                  <li key={index}>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      {url}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="help-text">
                <h4>Possible Solutions:</h4>
                <ul>
                  <li>
                    Disable "Block direct url file access" in Bunny Stream
                    settings
                  </li>
                  <li>Disable "CDN token authentication" temporarily</li>
                  <li>Check if videos are still processing</li>
                  <li>Verify domain is in allowed referrers list</li>
                </ul>
              </div>
            </div>
          </details>
        </div>
      </div>
    );
  }

  return (
    <div className={`bunny-video-container ${className}`}>
      {isLoading && (
        <div className="video-loading">
          <div className="loading-spinner"></div>
          <p>Loading video...</p>
        </div>
      )}

      <video
        ref={videoRef}
        controls
        poster={poster}
        onLoadedData={handleVideoLoad}
        onError={handleVideoError}
        style={{ display: isLoading ? "none" : "block" }}
        preload="metadata"
      >
        {/* Try HLS first (works better with Bunny Stream) */}
        <source src={videoUrls[0]} type="application/x-mpegURL" />
        {/* Fallback to direct MP4s */}
        {videoUrls.slice(1).map((url, index) => (
          <source key={index} src={url} type="video/mp4" />
        ))}
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BunnyVideoPlayer;
