import { Suspense } from "react";
import RatingPageClient from "./RatingPageClient";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RatingPageClient />
    </Suspense>
  );
}
