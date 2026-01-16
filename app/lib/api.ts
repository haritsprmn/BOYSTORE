import { StatusAkunResponse } from "@/app/types/akuncok";

export async function statusAkun(): Promise<StatusAkunResponse> {
  const res = await fetch("https://statusakun.olimdipo.my.id/api/all-accounts", {
    cache: "no-store",
  });
  return res.json();
}
