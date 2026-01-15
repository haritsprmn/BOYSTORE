function TimeID({ ts }) {
  if (!ts) {
    return "-";
  }
  const data = ts instanceof Date ? ts : new Date(ts);
  const d = new Date(data.toLocaleString("en-US", { timeZone: "Asia/Jakarta" }));

  const pad = (n) => String(n).padStart(2, "0");

  const waktuID = `${pad(d.getDate())}-${pad(d.getMonth() + 1)}-${d.getFullYear()} ${pad(d.getHours())}:${pad(d.getMinutes())}`;

  return `${waktuID}`;
}

export default TimeID;
