import { About } from "./sections/about";
import { Courses } from "./sections/courses";
import { Cta } from "./sections/cta";
import { Hero } from "./sections/hero";
import { Services } from "./sections/services";
import { Stats } from "./sections/stats";
import { Testimonials } from "./sections/testimonials";
import { Works } from "./sections/works";

/** Home: indigo hero → cream about/stats/services → indigo works +
 * courses band → cream testimonials/CTA. Section code lives in
 * `./sections`, content in `@/constants/home`. */
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
