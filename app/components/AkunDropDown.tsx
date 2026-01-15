import { StatusAkunResponse } from "@/app/types/akuncok";

interface Props {
  akun: StatusAkunResponse;
}

export default function AkunDropDown({ akun }: Props) {
  if (!akun) {
    return (
      <div className="mb-8">
        <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Pilih Akun / Cookie</label>
        <div className="relative">
          <select
            name="cookie"
            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white appearance-none transition-all cursor-pointer"
            required
          >
            <option value="">-- Memuat Akun Tersedia --</option>
          </select>
          <div className="absolute right-4 top-3.5 text-slate-400 pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24" data-icon="solar:alt-arrow-down-bold" className="iconify text-xl iconify--solar">
              <path fill="currentColor" d="m12.37 15.835l6.43-6.63C19.201 8.79 18.958 8 18.43 8H5.57c-.528 0-.771.79-.37 1.205l6.43 6.63c.213.22.527.22.74 0"></path>
            </svg>
          </div>
        </div>
      </div>
    );
  }
  const datas = akun.accounts.filter((a) => a.success);

  const sortedData = datas.sort((a, b) => {
    const aFull = a.usage.uses === a.usage.maxUses;
    const bFull = b.usage.uses === b.usage.maxUses;
    return Number(aFull) - Number(bFull);
  });

  return (
    <>
      {/* <!-- Input Pilih Akun (Dropdown dari API) --> */}
      <div className="mb-8">
        <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Pilih Akun / Cookie</label>
        <div className="relative">
          <select
            name="cookie"
            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white appearance-none transition-all cursor-pointer"
            required
          >
            <option value="">-- Pilih Akun Tersedia --</option>
            {/* generate opsi otomatis */}
            {sortedData
              .filter((data) => data.usage.uses !== data.usage.maxUses)
              .map((data) => (
                <option key={data.index} value={data.index}>
                  {data._displayName} ({data.usage.uses}/{data.usage.maxUses})
                </option>
              ))}
          </select>
          <div className="absolute right-4 top-3.5 text-slate-400 pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24" data-icon="solar:alt-arrow-down-bold" className="iconify text-xl iconify--solar">
              <path fill="currentColor" d="m12.37 15.835l6.43-6.63C19.201 8.79 18.958 8 18.43 8H5.57c-.528 0-.771.79-.37 1.205l6.43 6.63c.213.22.527.22.74 0"></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
