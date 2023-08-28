"use client";
import * as Tabs from "@radix-ui/react-tabs";
import { type Sitetabs } from "@/siteConfig";
import { useRouter, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface MainTabsProps {
  tabs: Sitetabs;
  children: React.ReactNode;
  className?: string;
}

export default function MainTabs({ tabs, children, className }: MainTabsProps) {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <Tabs.Root className={cn("w-full", className)} defaultValue="Services">
      <Tabs.List className="grid grid-cols-2 w-full shadow-xl shadow-gray-950/30 z-10">
        {tabs.map((tab) => (
          <Tabs.Trigger
            key={tab.name}
            className="relative lg:py-4 py-3 text-lg font-medium cursor-pointer text-cyan-300/60 border-b border-transparent data-[state=active]:text-cyan-300/90 data-[state=active]:bg-gradient-to-br data-[state=active]:from-cyan-950/10 data-[state=active]:to-cyan-950/30 hover:bg-cyan-950/30 data-[state=active]:font-semibold tracking-wider"
            value={tab.name}
            data-state={pathname === tab.path ? "active" : "inactive"}
            onClick={() => router.push(tab.path)}
          >
            {tab.name}
            {pathname === tab.path && (
              <motion.div
                className="absolute bottom-0 left-0 w-full h-[1.5px] bg-cyan-300/50"
                layoutId="underline"
              />
            )}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      <TabContent
        value={pathname === "/" ? "Services" : "Courses"}
        className="py-5 px-4"
      >
        {children}
      </TabContent>
    </Tabs.Root>
  );
}

export function TabContent({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof Tabs.Content>) {
  return (
    <Tabs.Content
      className={cn("w-full h-[75vh] overflow-y-scroll", className)}
      {...props}
    >
      {children}
    </Tabs.Content>
  );
}
