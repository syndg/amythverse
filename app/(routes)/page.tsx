import Accordion from "@/components/Accordion";
import { Services } from "@/siteConfig";

export default function Home() {
  return <Accordion values={Services} />;
}
