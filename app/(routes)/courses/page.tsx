import Accordion from "@/components/Accordion";
import { Courses } from "@/siteConfig";
import Link from "next/link";
import { Instagram } from "lucide-react";

export default function CoursesPage() {
  return (
    <>
      <h1 className="uppercase text-center text-2xl font-bold text-cyan-100/90 mb-2">
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
      <footer className="text-cyan-200/90 mt-16 w-full text-sm">
        <div className="ml-3 mb-24 text-cyan-200/60 leading-4">
          <h2 className="uppercase underline mb-2 text-lg text-cyan-200 font-bold">
            Note:
          </h2>
          <ul className="list-disc">
            <li className="mb-2">
              Courses are available in both online and offline mode.
            </li>
            <li className="mb-2">
              People of ages 9 and above are eligible for applying to the
              courses.
            </li>
            <li className="mb-2">
              Contact us to know about the course&apos;s structure and duration.
            </li>
            <li>More courses to be added soon.</li>
          </ul>
        </div>

        <div className="flex flex-col items-center">
          <div className="max-w-[400px] text-cyan-200/60 leading-4 border border-cyan-200/50 p-8 rounded-lg flex flex-col items-center text-sm sm:text-lg font-semibold">
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
                className="flex gap-2 items-center text-sm"
              >
                <Instagram className="w-5 h-5" /> Instagram
              </Link>
            </div>
          </div>
          <p className="text-cyan-200/90 mt-10">© 2023 Amythverse.</p>
        </div>
      </footer>
    </>
  );
}
