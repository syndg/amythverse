"use client";
import * as Tabs from "@radix-ui/react-tabs";
import { type Sitetabs } from "@/siteConfig";
import { useRouter, usePathname } from "next/navigation";

interface MainTabsProps {
  tabs: Sitetabs;
}

export default function MainTabs({ tabs }: MainTabsProps) {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <Tabs.List className="grid grid-cols-2 w-full">
      {tabs.map((tab) => (
        <Tabs.Trigger
          key={tab.name}
          className="py-4 text-lg font-medium cursor-pointer text-cyan-300/60 border-b border-transparent data-[state=active]:text-cyan-300/90  data-[state=active]:border-b-cyan-300/40 data-[state=active]:border-b data-[state=active]:bg-gradient-to-br data-[state=active]:from-cyan-950/10 data-[state=active]:to-cyan-950/30 hover:bg-cyan-950/30 data-[state=active]:font-semibold tracking-wider"
          value={tab.name}
          data-state={pathname === tab.path ? "active" : "inactive"}
          onClick={() => router.push(tab.path)}
        >
          {tab.name}
        </Tabs.Trigger>
      ))}
    </Tabs.List>
  );
}
