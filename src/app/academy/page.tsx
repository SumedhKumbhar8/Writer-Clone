import { AcademyPage } from "@/components/academy/AcademyPage";
import { createPageMetadata } from "@/lib/seo";
import "@/styles/academy.css";

export const metadata = createPageMetadata({
  title: "WRITER AI Academy",
  description:
    "Master WRITER with certifications, self-paced courses, and quick video tutorials covering everything from generative AI basics to building custom AI agents.",
  path: "/academy",
});

export default function AcademyRoute() {
  return <AcademyPage />;
}
