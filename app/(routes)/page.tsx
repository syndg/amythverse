import Accordion from "@/components/Accordion";
import { Services } from "@/siteConfig";

export default function Home() {
  return (
    <>
      <h1 className="uppercase text-center text-2xl font-bold text-cyan-100/90 mb-4">
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
    </>
  );
}
