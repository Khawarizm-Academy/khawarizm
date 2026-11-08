import { About } from "./sections/about";
import { Courses } from "./sections/courses";
import { Cta } from "./sections/cta";
import { Hero } from "./sections/hero";
import { Services } from "./sections/services";
import { Stats } from "./sections/stats";
import { Testimonials } from "./sections/testimonials";
import { Works } from "./sections/works";

/** Home: hero → about/stats/services → works/courses → testimonials/CTA. Code in `./sections`, content in `@/constants/home`. */
function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Stats />
      <Services />
      <Works />
      <Courses />
      <Testimonials />
      <Cta />
    </>
  );
}

export { HomePage };
export default HomePage;
