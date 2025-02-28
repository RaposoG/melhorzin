"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { useTheme } from "next-themes";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { useTranslations } from "next-intl";
import { icon } from "./moke";

function TechnologiesCarousel() {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  const t = useTranslations("technologiesCarousel.description");
  const [isMobile, setIsMobile] = useState(false);
  const [openCardId, setOpenCardId] = useState<number | null>(null);

  // Verifica se está em uma tela mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      watchFocus: false,
      active: true,
      dragFree: isMobile,
    },
    [
      AutoScroll({
        startDelay: 2,
        speed: isMobile ? 1 : 2,
      }),
    ]
  );

  const handleMouseEnter = useCallback(() => {
    emblaApi?.plugins()?.autoScroll?.stop();
  }, [emblaApi]);

  const handleMouseLeave = useCallback(() => {
    emblaApi?.plugins()?.autoScroll?.play();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const autoScroll = emblaApi.plugins()?.autoScroll;
    if (!autoScroll) return;

    autoScroll.play();
  }, [emblaApi]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (openCardId !== null) {
        const target = e.target as Element;
        if (!target.closest("[data-hover-card]")) {
          setOpenCardId(null);
          emblaApi?.plugins()?.autoScroll?.play();
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [emblaApi, openCardId]);

  return (
    <>
      <div className="w-full p-2">
        <div
          className={`overflow-hidden ${isMobile ? "h-[300px]" : "h-[600px]"}`}
          ref={emblaRef}
        >
          <div className="flex">
            {icon.map((item, index) => {
              const IconComponent = item.IconComponent;
              return (
                <div
                  key={index}
                  className="flex-[0_0_auto] min-w-0 px-4 md:flex-[0_0_10%]"
                  onMouseLeave={isMobile ? undefined : handleMouseLeave}
                  onMouseEnter={isMobile ? undefined : handleMouseEnter}
                >
                  <div data-hover-card>
                    <HoverCard
                      open={isMobile ? openCardId === index : undefined}
                    >
                      <HoverCardTrigger asChild>
                        <div
                          className="flex flex-col items-center"
                          onClick={
                            isMobile
                              ? () =>
                                  setOpenCardId(
                                    openCardId === index ? null : index
                                  )
                              : undefined
                          }
                        >
                          <p className="text-foreground select-none text-xs md:text-base">
                            {item.name}
                          </p>
                          <div
                            className="w-12 h-12 md:w-20 md:h-20 flex items-center justify-center bg-background/30 rounded-full shadow-lg"
                            style={{
                              filter: `drop-shadow(0 0 8px ${
                                isDarkMode ? item.colorDark : item.colorLight
                              }40)`,
                            }}
                          >
                            <IconComponent
                              size={isMobile ? 24 : 40}
                              color={
                                isDarkMode ? item.colorDark : item.colorLight
                              }
                            />
                          </div>
                        </div>
                      </HoverCardTrigger>
                      <HoverCardContent className="flex flex-col gap-2 left-0 top-full p-4 bg-background shadow-lg w-64 md:w-96">
                        <h2 className="text-sm md:text-xl text-foreground">
                          Minha experiência com{" "}
                          <span className="text-primary">{item.name}</span>
                        </h2>
                        <p className="text-xs md:text-base">
                          {(() => {
                            const key: any = item.name
                              .toLowerCase()
                              .replace(/\s/g, "_")
                              .replace(/\./g, "");
                            return t(key) || t("default");
                          })()}
                        </p>
                      </HoverCardContent>
                    </HoverCard>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default TechnologiesCarousel;
