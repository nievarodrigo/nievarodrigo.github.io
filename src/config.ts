export const SITE = {
  website: "https://nievarodrigo.github.io", // replace this with your deployed domain
  author: "Rodrigo Nieva",
  profile: "https://github.com/nievarodrigo",
  desc: "Portfolio de Rodrigo Nieva: productos SaaS en producción, experiencias realtime, sistemas fullstack y automatizaciones con IA.",
  title: "Rodrigo Nieva — Software Engineer",
  ogImage: "portfolio-og.svg",
  lightAndDarkMode: false,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "https://github.com/nievarodrigo/nievarodrigo.github.io/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "es", // html lang code. Set this empty and default will be "en"
  timezone: "America/Argentina/Buenos_Aires", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
