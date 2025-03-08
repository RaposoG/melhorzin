"use client";

import { icon, Icon } from "./moke";
import { useTranslations } from "next-intl";
import React, { useState, useEffect, useRef } from "react";
import SVGComponent from "../logo";
import { useTheme } from "next-themes";

function TechnologiesCarousel() {
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [hoveredItem, setHoveredItem] = useState<Icon | null>(null);
  const [isSpinning, setIsSpinning] = useState<boolean>(true);
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const spinSpeedRef = useRef<number>(0.5);
  const t = useTranslations("technologiesCarousel.description");

  const radius = 220;
  const angleStep = (2 * Math.PI) / icon.length;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    let animationId: number;

    const animate = () => {
      if (isSpinning) {
        setRotationAngle((prevAngle) => prevAngle + spinSpeedRef.current);
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isSpinning]);

  const handleMouseEnter = (icon: Icon) => {
    setHoveredItem(icon);
    setIsSpinning(false);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
    setIsSpinning(true);
  };

  const getTranslationKey = (name: string): string => {
    return name.toLowerCase().replace(/\s/g, "_").replace(/\./g, "");
  };

  return (
    <div className="flex flex-col justify-center items-center p-4">
      <div className="relative w-[500px] h-[500px]">
        {/* Orbit lines for visual effect (optional) */}
        <div className="absolute w-[450px] h-[450px] rounded-full left-[25px] top-[25px]" />
        <div className="absolute w-[350px] h-[350px] rounded-full left-[75px] top-[75px]" />
        <div className="absolute w-[250px] h-[250px] rounded-full left-[125px] top-[125px]" />

        {/* Rotating wheel with icons */}
        <div
          className="absolute w-[450px] h-[450px] rounded-full  backdrop-blur-sm"
          style={{
            transform: `rotate(${rotationAngle}deg)`,
            transition: isSpinning ? "none" : "transform 0.3s ease-out",
            left: "25px",
            top: "25px",
          }}
        >
          {icon.map((icon, index) => {
            const angle = index * angleStep;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            const { IconComponent } = icon;

            return (
              <div
                key={icon.name}
                className="absolute w-20 h-20 rounded-full flex items-center justify-center cursor-pointer transform -translate-x-1/2 -translate-y-1/2 shadow-lg transition-all duration-300 hover:scale-110"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  zIndex: hoveredItem === icon ? 30 : 10,
                  border: `2px solid ${
                    isDarkMode ? icon.colorDark : icon.colorLight
                  }`,
                  boxShadow: `0 0 15px rgba(${parseInt(
                    icon.colorDark.slice(1, 3),
                    16
                  )}, ${parseInt(icon.colorDark.slice(3, 5), 16)}, ${parseInt(
                    icon.colorDark.slice(5, 7),
                    16
                  )}, 0.3)`,
                }}
                onMouseEnter={() => handleMouseEnter(icon)}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className="w-full h-full flex items-center justify-center"
                  style={{ transform: `rotate(${-rotationAngle}deg)` }}
                >
                  <IconComponent
                    size={isMobile ? 24 : 40}
                    color={isDarkMode ? icon.colorDark : icon.colorLight}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Center circle with technology information */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full z-20 flex items-center justify-center text-center  backdrop-blur-md transition-all duration-300"
          style={{
            borderColor: isDarkMode
              ? hoveredItem?.colorDark
              : hoveredItem?.colorLight,
          }}
        >
          {hoveredItem ? (
            <div className="flex flex-col items-center p-4 max-h-full">
              <hoveredItem.IconComponent
                size={30}
                color={hoveredItem.colorDark}
                className="mb-3"
              />
              <h3
                className="text-2xl font-bold mb-2"
                style={{ color: hoveredItem.colorDark }}
              >
                {hoveredItem.name}
              </h3>
              <p className="text-sm text-foreground line-clamp-4">
                {(() => {
                  const key: any = hoveredItem.name
                    .toLowerCase()
                    .replace(/\s/g, "_")
                    .replace(/\./g, "");
                  return t(key) || t("default");
                })()}
              </p>
            </div>
          ) : (
            <div className="text-center opacity-70">
              <SVGComponent className="w-[100px] h-[100px] sm:w-[100px] sm:h-[100px]" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TechnologiesCarousel;
