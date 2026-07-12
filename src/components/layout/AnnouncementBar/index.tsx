import Link from "next/link";
import { navigationData } from "@/data/navigation";

export function AnnouncementBar() {
  const { announcement } = navigationData;

  return (
    <div className="bg-midnight-graphite px-4 py-2 text-center text-caption text-canvas-white">
      <span>{announcement.text}</span>{" "}
      <Link href={announcement.href} className="underline">
        {announcement.cta}
      </Link>
    </div>
  );
}
