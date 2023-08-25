"use client";
import { cn } from "@/lib/utils";
import * as Tabs from "@radix-ui/react-tabs";

export default function TabContent({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof Tabs.Content>) {
  return (
    <Tabs.Content className={cn("w-full", className)} {...props}>
      {children}
    </Tabs.Content>
  );
}
