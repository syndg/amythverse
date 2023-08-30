import Accordion from "@/components/Accordion";
import { Services } from "@/siteConfig";
import { Instagram, Facebook } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="uppercase text-center text-2xl font-bold text-cyan-100/90 mb-2">
        Services
      </h1>
      <p className="py-3 px-5 lg:p-4 lg:text-xl text-cyan-100/70 leading-5  mb-5 font-sans border-l-[1.8px] border-r-[1.8px] border-cyan-400/50">
        At Amythverse, our services span across a wide spectrum of creative
        endeavors. Whether it&apos;s music production, songwriting and
        composition, script and cinematography, photography, or web development
        and design, we&apos;ve got you covered. No matter the size or scope of
        your idea, we are here to bring your vision to life. Let our talented
        team help you execute your creative vision and turn your dreams into
        reality. Together, we can achieve greatness! 🎶📝📷💻
      </p>
      <Accordion values={Services} />
      <footer className="text-center flex flex-col gap-4 items-center text-cyan-200/90 mt-8 text-sm sm:text-lg">
        <p className="mb-3 text-xs sm:text-sm">Terms and conditions apply*</p>
        <div className="max-w-[400px] text-cyan-200/60 leading-4 border border-cyan-200/50 p-8 rounded-lg flex flex-col items-center text-sm sm:text-lg font-semibold ">
          <h2 className="uppercase underline font-bold mb-2 text-lg text-cyan-200">
            Reach out to us:
          </h2>
          <p className="mb-1">amythverseconnect@gmail.com</p>
          <p className="mb-2">
            <strong className="font-bold">Mob:</strong> +91 6290757405
          </p>
          <div className="flex justify-center">
            <Link
              href="https://www.instagram.com/amythverse/"
              className="flex gap-1 items-center text-sm hover:text-cyan-200 transition-all duration-150"
            >
              <Instagram className="w-5 h-5" />
              Instagram
            </Link>
          </div>
        </div>
        <p className="mt-6">© 2023 Amythverse.</p>
      </footer>
    </>
  );
}
