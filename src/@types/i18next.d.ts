/**
 * If you want to enable locale keys typechecking and enhance IDE experience.
 *
 * Requires `resolveJsonModule:true` in your tsconfig.json.
 *
 * @link https://www.i18next.com/overview/typescript
 */
import 'i18next';

import type translationPT from '../../public/locales/pt/common.json';
import type translationEN from '../../public/locales/en/common.json';

interface I18nNamespaces {
  pt: typeof translationPT;
  en: typeof translationEN;
}

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: I18nNamespaces;
  }
}
