import Banner from "@/app/component/Banner/Banner";
import WhyHireMe from "./component/Banner/WhyHireMe";
import Skills from "./component/Portfolio/Skills";
import { Project } from "./component/Portfolio";

export default function Home() {
  return (
    <div className="bg-bannerBgColor">
      <Banner />
      <div className="px-20">
        <WhyHireMe />
        <Project />
        <Skills />
      </div>
    </div>
  );
}
