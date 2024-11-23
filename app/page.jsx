import { Suspense } from "react";
import ProjectGrid from "./(ProjectGrid)/ProjectGrid";
import Loading from "./loading";

export default function page() {
  return (
    <Suspense
      fallback={<Loading />}
    >
      <ProjectGrid />
    </Suspense>
  );
}
