"use client";

import { useEffect, useRef, useState } from "react";

interface CountdownProps {
  targetTime: string;
  tgl?: boolean;
  onExpire?: () => void; // 👈 callback
}

export default function Countdown({ targetTime, tgl, onExpire }: CountdownProps) {
  const expiredRef = useRef(false);

  const tanggal = targetTime.slice(0, 10);

  const calculateTimeLeft = () => {
    const difference = new Date(targetTime).getTime() - Date.now();

    if (difference <= 0) {
      return null;
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const next = calculateTimeLeft();
      setTimeLeft(next);

      // 🔥 trigger SEKALI
      if (next === null && !expiredRef.current) {
        expiredRef.current = true;
        onExpire?.();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetTime, onExpire]);

  if (!timeLeft) {
    return <span className="text-red-500 font-bold">EXPIRED</span>;
  }

  if (!tgl) {
    return (
      <span>
        {String(timeLeft.minutes).padStart(2, "0")}:{String(timeLeft.seconds).padStart(2, "0")}
      </span>
    );
  }

  return (
    <span>
      {tanggal} {timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}
    </span>
  );
}
