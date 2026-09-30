"use client";

import { Eye } from "lucide-react";
import { usePathname } from "next/navigation";

export default function DemoBanner() {
  const pathname = usePathname();

  if (pathname.startsWith("/admin")) return null;

  return (
    <div className="demo-preview-banner" role="status">
      <Eye size={15} />
      <div>
        <strong>DEMO / PREVIEW</strong>
        <span>
          Vehicle information and photographs shown during this demonstration
          are sample content and are not confirmed Safi Motors stock.
        </span>
      </div>
    </div>
  );
}
