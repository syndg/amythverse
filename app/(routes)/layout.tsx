import Image from "next/image";
import Link from "next/link";
import MainTabs from "@/components/MainTabs";
import { Card } from "@/components/ui/card";
import { tabs } from "@/siteConfig";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="absolute inset-0 -z-10 h-screen w-screen">
        <Image
          src="/bg.jpg"
          alt="Background image of a music studio"
          className="brightness-[0.25]"
          objectFit="cover"
          fill
        />
      </div>
      <header className="grid place-content-center p-4 md:p-5 border-b z-30 text-cyan-300/90 border-b-cyan-300/40 bg-cyan-950/20 backdrop-blur-lg">
        <Link
          href="/"
          className="text-2xl font-bold font-mono tracking-widest md:text-3xl lg:text-4xl"
        >
          AMYTHVERSE
        </Link>
      </header>
      <div className="flex justify-center p-4">
        <Card>
          <MainTabs tabs={tabs}> {children}</MainTabs>
        </Card>
      </div>
    </>
  );
}
