import Link from "next/link";
import { navigationData } from "@/data/navigation";

export function MegaMenu() {
  const { platform } = navigationData.megaMenu;

  return (
    <div className="group relative">
      <button
        type="button"
        className="text-body hover:text-action-blue"
        aria-haspopup="true"
        suppressHydrationWarning
      >
        More
      </button>
      <div className="invisible absolute left-0 top-full pt-4 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
        <div className="min-w-48 rounded-xl border border-cloud-white bg-canvas-white p-4 shadow-lg">
          {platform.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block rounded-lg px-3 py-2 text-body hover:bg-lavender-mist"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
