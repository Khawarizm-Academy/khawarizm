/** Central route path registry — keeps <Link to>, redirects and the
 * route config in sync. */
export const ROUTES = {
  home: "/",
  /** Pages below are planned: the links exist, the pages come next
   * (until then the router shows the 404 page). */
  about: "/about",
  services: "/services",
  works: "/works",
  courses: "/courses",
  contact: "/contact",
  notFound: "*",
} as const;

/** In-page anchors on the Home page. Use plain <a href>, not <Link>,
 * so the browser handles the hash scroll from any route. */
export const HOME_ANCHORS = {
  about: "/#about",
  services: "/#services",
  works: "/#works",
  courses: "/#courses",
  contact: "/#contact",
} as const;
