import { Suspense } from "react";
import TshirtPage from "./TshirtPage";

export default function Page() {
  return (
    <Suspense>
      <TshirtPage />
    </Suspense>
  );
}
