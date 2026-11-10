import { useEffect } from "react";
import { useLocation } from "react-router";

const SITE_NAME = "خوارزم | أكاديمية تقنية واستوديو رقمي";
const DEFAULT_DESCRIPTION = "خوارزم — أكاديمية تقنية عربية تعلّم الخوارزميات والبرمجة، واستوديو رقمي يصمم المواقع ويطور التطبيقات.";
const PAGE_META: Record<string, { title: string; description: string; keywords?: string; indexable?: boolean }> = {
  "/": { title: SITE_NAME, description: DEFAULT_DESCRIPTION },
  "/about": { title: "من نحن | خوارزم", description: "تعرّف على أكاديمية خوارزم وفريقها ورؤيتها في التعليم التقني وصناعة المنتجات الرقمية." },
  "/services": { title: "خدماتنا | خوارزم", description: "خدمات تصميم المواقع وتطوير التطبيقات والحلول الرقمية من أكاديمية خوارزم.", keywords: "تصميم مواقع, تطوير تطبيقات, خدمات رقمية" },
  "/works": { title: "أعمالنا | خوارزم", description: "استعرض مشاريع خوارزم الرقمية في تصميم المواقع وتطوير التطبيقات." },
  "/contact": { title: "تواصل معنا | خوارزم", description: "أخبرنا عن فكرتك أو عن الدورة التي تبحث عنها، وسنعود إليك قريبًا." },
  "/privacy": { title: "سياسة الخصوصية | خوارزم", description: "تعرّف على كيفية التعامل مع بياناتك عند التعلّم معنا أو طلب خدماتنا الرقمية." },
  "/terms": { title: "الشروط والأحكام | خوارزم", description: "إطار واضح لاستخدام موقع خوارزم والاشتراك في الدورات والتعاون على المشاريع الرقمية." },
};

function upsertMeta(selector: string, attributes: Record<string, string>, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) { element = document.createElement("meta"); Object.entries(attributes).forEach(([key, value]) => element!.setAttribute(key, value)); document.head.appendChild(element); }
  element.setAttribute("content", content);
}

function RouteSEO() {
  const location = useLocation();
  useEffect(() => {
    const pathname = location.pathname.replace(/\/$/, "") || "/";
    const isProject = pathname.startsWith("/works/");
    const meta = PAGE_META[pathname] ?? (isProject ? { title: "تفاصيل المشروع | خوارزم", description: "استعرض تفاصيل أحد مشاريع خوارزم الرقمية." } : { title: "الصفحة غير موجودة | خوارزم", description: "عذرًا، الصفحة المطلوبة غير موجودة.", indexable: false });
    const indexable = meta.indexable !== false;
    const canonical = `${window.location.origin}${pathname}`;
    document.title = meta.title;
    upsertMeta('meta[name="description"]', { name: "description" }, meta.description);
    if (meta.keywords) upsertMeta('meta[name="keywords"]', { name: "keywords" }, meta.keywords);
    upsertMeta('meta[name="robots"]', { name: "robots" }, indexable ? "index,follow" : "noindex,nofollow");
    upsertMeta('meta[property="og:title"]', { property: "og:title" }, meta.title);
    upsertMeta('meta[property="og:description"]', { property: "og:description" }, meta.description);
    upsertMeta('meta[property="og:type"]', { property: "og:type" }, "website");
    upsertMeta('meta[property="og:url"]', { property: "og:url" }, canonical);
    upsertMeta('meta[property="og:site_name"]', { property: "og:site_name" }, SITE_NAME);
    upsertMeta('meta[name="twitter:card"]', { name: "twitter:card" }, "summary");
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title" }, meta.title);
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description" }, meta.description);
    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) { link = document.createElement("link"); link.rel = "canonical"; document.head.appendChild(link); }
    link.href = canonical;
    let structured = document.head.querySelector<HTMLScriptElement>('script[data-seo-jsonld]');
    if (!structured) { structured = document.createElement("script"); structured.type = "application/ld+json"; structured.dataset.seoJsonld = "true"; document.head.appendChild(structured); }
    structured.textContent = JSON.stringify({ "@context": "https://schema.org", "@graph": [{ "@type": "Organization", name: "أكاديمية خوارزم", url: window.location.origin, logo: `${window.location.origin}/favicon.svg` }, { "@type": "WebSite", name: SITE_NAME, url: window.location.origin, inLanguage: "ar" }, { "@type": "WebPage", name: meta.title, description: meta.description, url: canonical, isPartOf: { "@type": "WebSite", url: window.location.origin } }] });
  }, [location.pathname]);
  return null;
}

export { RouteSEO };
