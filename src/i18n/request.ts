import { cookies, headers } from "next/headers";
import { getRequestConfig } from "next-intl/server";

const locales = ["pt-br", "en", "es", "de", "fr"];
const defaultLocale = "en";

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get("NEXT_LOCALE");

  const headersList = await headers();
  const acceptLanguage = headersList.get("accept-language");

  let locale = defaultLocale;

  if (localeCookie?.value) {
    locale = localeCookie.value;
  } else if (acceptLanguage) {
    const browserLocale = acceptLanguage.split(",")[0].split("-")[0];

    const localeMap: Record<string, string> = {
      pt: "pt-br",
      en: "en",
      es: "es",
      de: "de",
      fr: "fr",
    };

    locale = localeMap[browserLocale] || defaultLocale;
  }

  if (!locales.includes(locale)) {
    locale = defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
