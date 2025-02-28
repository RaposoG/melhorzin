"use client";

import { useCallback, useEffect } from "react";
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

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, watchFocus: false, active: true },
    [
      AutoScroll({
        startDelay: 2,
        speed: 2,
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

  return (
    <>
      <div className="w-full p-2">
        <div className="overflow-hidden h-[600px]" ref={emblaRef}>
          <div className="flex">
            {icon.map((item, index) => {
              const IconComponent = item.IconComponent;
              return (
                <div
                  key={index}
                  className="flex-[0_0_10%] min-w-0 px-4"
                  onMouseLeave={handleMouseLeave}
                  onMouseEnter={handleMouseEnter}
                >
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <div className="flex flex-col items-center">
                        <p className="text-foreground select-none">
                          {item.name}
                        </p>
                        <div
                          className="w-20 h-20 flex items-center justify-center bg-background/30 rounded-full shadow-lg"
                          style={{
                            filter: `drop-shadow(0 0 8px ${
                              isDarkMode ? item.colorDark : item.colorLight
                            }40)`,
                          }}
                        >
                          <IconComponent
                            size={40}
                            color={
                              isDarkMode ? item.colorDark : item.colorLight
                            }
                          />
                        </div>
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="flex flex-col gap-2 left-0 top-full p-4 bg-background shadow-lg  w-96 ">
                      <h2 className="text-1xl text-foreground">
                        Minha experiência com{" "}
                        <span className="text-primary">{item.name}</span>
                      </h2>
                      <p>
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
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default TechnologiesCarousel;
