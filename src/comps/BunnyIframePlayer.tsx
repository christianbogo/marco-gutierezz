import React from "react";

interface BunnyIframePlayerProps {
  videoId: string;
  libraryId: string;
  className?: string;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
  width?: string | number;
  height?: string | number;
}

const BunnyIframePlayer: React.FC<BunnyIframePlayerProps> = ({
  videoId,
  libraryId,
  className = "",
  autoplay = false,
  loop = false,
  muted = false,
  width = "100%",
  height = 400,
}) => {
  // Construct the iframe URL with parameters
  const params = new URLSearchParams();
  if (autoplay) params.set("autoplay", "true");
  if (loop) params.set("loop", "true");
  if (muted) params.set("muted", "true");

  const iframeUrl = `https://iframe.mediadelivery.net/embed/${libraryId}/${videoId}${
    params.toString() ? `?${params.toString()}` : ""
  }`;

  return (
    <div className={`bunny-iframe-container ${className}`}>
      <iframe
        src={iframeUrl}
        width={width}
        height={height}
        style={{ border: "none", borderRadius: "5px" }}
        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
        allowFullScreen
        title="Bunny Stream Video Player"
        loading="lazy"
      />
    </div>
  );
};

export default BunnyIframePlayer;
