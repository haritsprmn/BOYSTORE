"use client";
import TimeID from "./TimeID";

export default function DetailPesanan({ data }) {
  const { pesanan, pembayaran, expired, ulasan } = data;

  return (
    <section className="max-w-3xl mx-auto px-6 py-10">
      <div className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden">
        {/* HEADER */}
        <div className="bg-slate-50 px-8 py-6 border-b border-slate-100">
          <h2 className="text-xl font-extrabold text-slate-900">Detail Pesanan</h2>
          <p className="text-xs text-slate-500 mt-1">
            Token Pesanan: <span className="font-mono font-semibold text-slate-700">{pesanan.token}</span>
          </p>
        </div>

        <div className="p-8 space-y-8">
          {/* PESANAN */}
          <InfoBlock title="Informasi Pesanan">
            <InfoRow label="Nomor WhatsApp" value={`+${pesanan.wa}`} />
            <InfoRow label="Durasi" value={`${pesanan.durasi} Hari`} />
            <InfoRow label="Akun / Cookie" value={pesanan.cookietext} />
          </InfoBlock>

          {/* PEMBAYARAN */}
          <InfoBlock title="Informasi Pembayaran">
            <InfoRow label="ID Transaksi" value={pembayaran.TRXID} mono />
            <InfoRow label="Total Pembayaran" value={`Rp ${new Intl.NumberFormat("id-ID").format(pembayaran.harga)}`} highlight />
            <InfoRow label="Status" value={pembayaran.status} status={pembayaran.status} />
            <InfoRow label="Waktu Pembayaran" value={<TimeID ts={pembayaran.terbayar} />} />
          </InfoBlock>

          {/* ULASAN */}
          {ulasan && (
            <InfoBlock title="Ulasan Pelanggan">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-semibold text-slate-800">{ulasan.nama}</span>
                <StarRating star={ulasan.star} />
              </div>
              <p className="text-sm text-slate-600 italic">“{ulasan.komentar}”</p>
            </InfoBlock>
          )}

          {/* EXPIRED */}
          <div className="bg-red-50 border border-red-100 rounded-xl p-4 text-sm text-red-600">
            Berlaku hingga:{" "}
            <span className="font-semibold">
              <TimeID ts={expired} />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================== SUB COMPONENT ================== */

function InfoBlock({ title, children }) {
  return (
    <div>
      <h3 className="text-sm font-bold text-slate-700 mb-4 uppercase">{title}</h3>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

function InfoRow({ label, value, mono, highlight, status }) {
  const statusColor = status === "completed" ? "bg-green-100 text-green-600" : "bg-amber-100 text-amber-600";

  return (
    <div className="flex justify-between items-center">
      <span className="text-xs text-slate-500">{label}</span>
      <span className={`text-sm font-semibold ${mono ? "font-mono" : ""} ${highlight ? "text-slate-900" : "text-slate-700"} ${status ? `px-2 py-1 rounded-md ${statusColor}` : ""}`}>{value}</span>
    </div>
  );
}

function StarRating({ star }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={i < star ? "#facc15" : "none"} stroke="#facc15" className="w-4 h-4">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.562.562 0 0 0 .475.345l5.518.442a.562.562 0 0 1 .32.988l-4.204 3.602a.562.562 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.01 20.539a.562.562 0 0 1-.84-.61l1.285-5.385a.562.562 0 0 0-.182-.557L2.07 10.385a.562.562 0 0 1 .32-.988l5.518-.442a.562.562 0 0 0 .475-.345L10.508 3.5Z"
          />
        </svg>
      ))}
    </div>
  );
}
