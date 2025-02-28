"use client";

import { useState, useEffect, memo } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";

import ProjectsComponent from "../Projects/ProjectsComponent";
import * as interfaces from "@/types/interfaces";

const CarouselComponent = memo(function CarouselComponent() {
  const [repos, setRepos] = useState<interfaces.GithubReposProps[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: repos && repos.length ? repos.length : 32,
    renderMode: "performance",
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `${process.env.URL ? process.env.URL : ""}/api/github/repos`
      );
      const githubData = await response.json();

      setRepos(githubData.data);
    })();
  }, []);

  return (
    <div key={repos.length}>
      <article
        ref={sliderRef}
        className="keen-slider mt-20"
        role="slider-wrapper"
      >
        {typeof repos !== "undefined" &&
          repos.length > 0 &&
          repos.map((item: interfaces.GithubReposProps) => (
            <ProjectsComponent
              key={item.id}
              id={item.id}
              name={item.name}
              html_url={item.html_url}
              description={item.description}
              created_at={item.created_at}
              updated_at={item.updated_at}
              homepage={item.homepage}
              license={item.license}
              topics={item.topics}
              language={item.language}
            />
          ))}
      </article>

      {repos && loaded && instanceRef.current && (
        <section className="relative mt-16 flex items-center justify-center xl:mt-8">
          <div className="hidden justify-center px-0 py-3 xl:flex">
            {[
              ...Array(instanceRef.current.track.details.slides.length).keys(),
            ].map((idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx);
                  }}
                  className={
                    "mx-1 my-0 h-3 w-3 cursor-pointer rounded-full border-0 bg-color-five p-1" +
                    (currentSlide === idx ? " bg-white" : "")
                  }
                ></button>
              );
            })}
          </div>
          <section className="absolute right-6 ml-auto hidden gap-4 xl:flex">
            <div
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-color-two"
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
            >
              <MdOutlineChevronLeft size={24} color="#FFFF" />
            </div>
            <div
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-color-two"
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
            >
              <MdOutlineChevronRight size={24} color="#FFFF" />
            </div>
          </section>
        </section>
      )}
    </div>
  );
});

export default CarouselComponent;
