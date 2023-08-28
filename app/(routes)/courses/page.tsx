import Accordion from "@/components/Accordion";
import { Courses } from "@/siteConfig";

export default function CoursesPage() {
  return (
    <>
      <h1 className="uppercase text-center text-2xl font-bold text-cyan-100/90 mb-4">
        Courses
      </h1>
      <p className="py-3 px-5 lg:p-4 lg:text-xl text-cyan-100/70 leading-5  mb-5 font-sans border-l-[1.8px] border-r-[1.8px] border-cyan-400/50">
        Whether you&apos;re a beginner or an experienced musician, our
        comprehensive music courses at Amythverse are designed to cater to all
        skill levels. From mastering a new instrument to honing your vocals, our
        expert instructors will guide you through a dynamic learning experience.
        Discover your true potential and unleash your musical talent with our
        diverse range of courses. Let&apos;s embark on this musical journey
        together! 🎵🎸🎹
      </p>
      <Accordion values={Courses} />
    </>
  );
}
