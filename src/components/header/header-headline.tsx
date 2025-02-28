import { useTranslations } from 'next-intl'

export function HeaderHeadLine() {
  const t = useTranslations('header')

  return (
    <div className="w-full flex justify-end">
      <div className="flex px-4 w-full flex-col max-w-[calc(1536px/1.8)] pr-12">
        <b className="text-muted-foreground text-3xl">{t('pretitle')}</b>

        <h1 className="text-6xl font-semibold leading-[120%] mt-7 mb-5 font-playfair">
          {t('title')}
        </h1>

        <p className="text-xl leading-relaxed text-muted-foreground">
          {t('description')}
        </p>
      </div>
    </div>
  )
}
