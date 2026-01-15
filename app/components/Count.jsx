"use client";

import { useEffect, useState } from "react";

export default function Countdown({ targetTime, tgl }) {
  // opsi 1
  const tanggal = targetTime.slice(0, 10);

  const calculateTimeLeft = () => {
    const difference = new Date(targetTime) - new Date();

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
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetTime]);

  if (!timeLeft) {
    return "EXPIRED";
  }

  if (!tgl) {
    return `${String(timeLeft.minutes).padStart(2, "0")}:${String(timeLeft.seconds).padStart(2, "0")}`;
  }

  return `${tanggal} ${timeLeft.hours}:${timeLeft.minutes}:${timeLeft.seconds}`;

  // <div className="flex gap-3 text-center">
  //   <TimeBox label="Hari" value={timeLeft.days} />
  //   <TimeBox label="Jam" value={timeLeft.hours} />
  //   <TimeBox label="Menit" value={timeLeft.minutes} />
  //   <TimeBox label="Detik" value={timeLeft.seconds} />
  // </div>
}

/* ================= SUB COMPONENT ================= */

function TimeBox({ label, value }) {
  return (
    <div className="bg-slate-900 text-white rounded-xl px-4 py-3 min-w-[70px]">
      <div className="text-2xl font-extrabold">{String(value).padStart(2, "0")}</div>
      <div className="text-[10px] uppercase tracking-wider text-slate-300">{label}</div>
    </div>
  );
}
