"use client";
import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { type AccordionType } from "@/siteConfig";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Accordion({ values }: { values: AccordionType }) {
  return (
    <AccordionPrimitive.Root
      className="w-full flex flex-col gap-8"
      type="single"
      collapsible
    >
      {values.map(({ name, content, tabname }, index) => (
        <AccordionItem
          value={tabname}
          key={index}
          className="border-[1.3px] border-cyan-500/40 rounded-lg overflow-hidden data-[state=open]:border-cyan-500/80 transition-all duration-150"
        >
          <AccordionTrigger className="w-full bg-cyan-950/40 p-4 rounded-t-lg text-cyan-100/70 data-[state=open]:text-cyan-200 data-[state=closed]:rounded-lg transition-all duration-150">
            <div className="flex justify-between items-center">
              <span className="uppercase text-[18px] font-semibold data-[state=open]:font-bold">
                {name}
              </span>
              <span className="p-[2px] bg-cyan-800/30 rounded-full">
                <ChevronDown />
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-1 bg-cyan-950/40 text-cyan-200/50 rounded-b-lg data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden transition-all duration-200">
            {content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </AccordionPrimitive.Root>
  );
}

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("width-full", className)}
    {...props}
  />
));

AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn("", className)}
      {...props}
    >
      {children}
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));

AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn("", className)}
    {...props}
  >
    {children}
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;
