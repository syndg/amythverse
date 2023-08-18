"use client";
import { cn } from "@/lib/utils";
import * as Tabs from "@radix-ui/react-tabs";

interface TabContentProps {
  children: React.ReactNode;
  value: string;
}

export default function TabContent({
  children,
  className,
  ...props
}: TabContentProps & React.ComponentPropsWithoutRef<typeof Tabs.Content>) {
  return (
    <Tabs.Content className={cn("w-full", className)} {...props}>
      {children}
    </Tabs.Content>
  );
}
