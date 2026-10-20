import React, { useState, useEffect, useRef } from "react";

export default function PortraitReelCard({
  reel,
  index,
  isActive,
  isGlobalMuted,
  onPlay,
  onPause,
  onToggleMute,
}) {
  const videoRef = useRef(null);
  const cardContainerRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTimeStr, setCurrentTimeStr] = useState("0:00");
  const [durationStr, setDurationStr] = useState("0:00");
  const [isHovered, setIsHovered] = useState(false);

  const formatTime = (seconds) => {
    if (isNaN(seconds) || seconds < 0) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const dur = videoRef.current.duration || 0;
    setCurrentTimeStr(formatTime(current));
    if (dur > 0) {
      setProgress((current / dur) * 100);
      setDurationStr(formatTime(dur));
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current && videoRef.current.duration) {
      setDurationStr(formatTime(videoRef.current.duration));
    }
  };

  const togglePlay = (e) => {
    if (e) e.stopPropagation();
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
      if (onPause) onPause(index);
    } else {
      if (onPlay) onPlay(index);
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    }
  };

  const handleSeek = (e) => {
    e.stopPropagation();
    if (!videoRef.current || !videoRef.current.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, clickX / rect.width));
    videoRef.current.currentTime = ratio * videoRef.current.duration;
    setProgress(ratio * 100);
  };

  const handleFullscreen = (e) => {
    e.stopPropagation();
    const el = cardContainerRef.current || videoRef.current;
    if (!el) return;

    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    } else if (el.requestFullscreen) {
      el.requestFullscreen().catch(() => {});
    } else if (el.webkitRequestFullscreen) {
      el.webkitRequestFullscreen();
    }
  };

  // Sync with parent active state: if this card is no longer active, pause it
  useEffect(() => {
    if (!isActive && isPlaying && videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [isActive, isPlaying]);

  // Sync mute state
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isGlobalMuted;
    }
  }, [isGlobalMuted]);

  return (
    <div
      ref={cardContainerRef}
      className={`ns-portrait-card ${isActive ? "is-active" : ""} ${isPlaying ? "is-playing" : "is-paused"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={togglePlay}
      role="region"
      aria-label={`Video Reel: ${reel.title}`}
    >
      {/* Video Viewport (9:16 Portrait Ratio) */}
      <div className="ns-portrait-media-wrap">
        <video
          ref={videoRef}
          playsInline
          loop
          preload="metadata"
          muted={isGlobalMuted}
          className="ns-portrait-video"
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={() => setIsPlaying(false)}
        >
          <source src={`${reel.src}#t=0.001`} type="video/mp4" />
          <source src={`${reel.src}#t=0.001`} type="video/quicktime" />
        </video>

        {/* Ambient Top & Bottom Vignettes for maximum readability */}
        <div className="ns-portrait-gradient-top" />
        <div className="ns-portrait-gradient-bottom" />

        {/* Top Header Floating Overlay */}
        <div className="ns-portrait-top-bar">
          <div className="ns-portrait-tag-pill">
            <span className="ns-tag-num">{reel.num}</span>
            <span className="ns-tag-label">{reel.tag}</span>
          </div>

          <div className="ns-portrait-top-actions">
            {/* Audio Mute/Unmute Toggle Button */}
            <button
              type="button"
              className="ns-portrait-icon-btn"
              onClick={(e) => {
                e.stopPropagation();
                if (onToggleMute) onToggleMute();
              }}
              aria-label={isGlobalMuted ? "Unmute audio" : "Mute audio"}
              title={isGlobalMuted ? "Unmute" : "Mute"}
            >
              {isGlobalMuted ? (
                /* Muted Icon */
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <line x1="23" y1="9" x2="17" y2="15" />
                  <line x1="17" y1="9" x2="23" y2="15" />
                </svg>
              ) : (
                /* Unmuted Volume High Icon */
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                </svg>
              )}
            </button>

            {/* Fullscreen Expand Button */}
            <button
              type="button"
              className="ns-portrait-icon-btn"
              onClick={handleFullscreen}
              aria-label="View Fullscreen"
              title="Fullscreen"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Center Floating Play / Pause Trigger */}
        <div
          className={`ns-portrait-center-action ${!isPlaying || isHovered ? "is-visible" : ""}`}
        >
          <button
            type="button"
            className="ns-portrait-play-btn"
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#A33817">
                <rect x="6" y="4" width="4" height="16" rx="1.5" />
                <rect x="14" y="4" width="4" height="16" rx="1.5" />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#A33817"
                style={{ marginLeft: "3px" }}
              >
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            )}
          </button>
        </div>

        {/* Bottom Details & Progress Overlay */}
        <div className="ns-portrait-bottom-info">
          <div className="ns-portrait-meta">
            <span className="ns-portrait-cat">{reel.category}</span>
            <span className="ns-portrait-time-pill">
              {isPlaying ? `${currentTimeStr} / ${durationStr}` : reel.duration}
            </span>
          </div>

          <h3 className="ns-portrait-title">{reel.title}</h3>
          <p className="ns-portrait-desc">{reel.subtitle}</p>

          {/* Scrubbable Progress Bar */}
          <div
            className="ns-portrait-progress-track"
            onClick={handleSeek}
            title="Click to seek"
          >
            <div
              className="ns-portrait-progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

