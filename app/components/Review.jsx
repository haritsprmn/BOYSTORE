"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import reviews from "@/app/api/ulasan/ulasan.json";

export default function Review({ speed = 80, arah = "left" }) {
  // speed = pixel per second
  const trackRef = useRef(null);
  const [duration, setDuration] = useState(0);

  const duplicatedReviews = useMemo(() => [...reviews, ...reviews], []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const halfWidth = track.scrollWidth / 2;
    const calculatedDuration = halfWidth / speed;

    if (arah === "right") {
      track.style.setProperty("--start-x", `-${halfWidth}px`);
      track.style.setProperty("--end-x", "0px");
      track.style.setProperty("--scroll-distance", `${halfWidth}px`);
    } else {
      track.style.setProperty("--start-x", "0px");
      track.style.setProperty("--end-x", `-${halfWidth}px`);
      track.style.setProperty("--scroll-distance", `-${halfWidth}px`);
    }
    setDuration(calculatedDuration);
  }, [speed]);

  return (
    <>
      <div className="wrapper">
        <div ref={trackRef} className="running-track" style={{ animationDuration: `${duration}s` }}>
          {duplicatedReviews.map((review, index) => (
            <div key={index} className="review-card bg-white rounded-xl p-4 shadow-sm min-w-[220px]">
              {/* ⭐ STAR */}
              <div className="flex gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={i < review.star ? "#facc15" : "none"} stroke="#facc15" className="w-4 h-4">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.562.562 0 0 0 .475.345l5.518.442a.562.562 0 0 1 .32.988l-4.204 3.602a.562.562 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.01 20.539a.562.562 0 0 1-.84-.61l1.285-5.385a.562.562 0 0 0-.182-.557L2.07 10.385a.562.562 0 0 1 .32-.988l5.518-.442a.562.562 0 0 0 .475-.345L10.508 3.5Z"
                    />
                  </svg>
                ))}
              </div>

              {/* 💬 TEXT */}
              <p className="italic text-sm text-slate-600">“{review.komentar}”</p>

              {/* 👤 NAME */}
              <span className="mt-2 block text-xs font-semibold text-slate-800">— {review.name}</span>
            </div>
          ))}
        </div>

        <style jsx>{`
          .wrapper {
            overflow: hidden;
            width: 100%;
            padding: 24px 0;

            mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
          }

          .running-track {
            display: flex;
            width: max-content;
            animation-name: scroll;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
            will-change: transform;
          }

          .running-track:hover {
            animation-play-state: paused;
          }

          .review-card {
            min-width: 260px;
            margin-right: 24px;
            padding: 16px;
            background: white;
            border-radius: 12px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
            flex-shrink: 0;
          }

          @keyframes scroll {
            from {
              transform: translateX(var(--start-x));
            }
            to {
              transform: translateX(var(--end-x));
            }
          }
        `}</style>
      </div>
    </>
  );
}
