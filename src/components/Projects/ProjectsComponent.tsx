"use client";

import * as interfaces from "@/types/interfaces";
import { ImGithub } from "react-icons/im";
import ButtonComponent from "../Button/ButtonComponent";
import Link from "next/link";
import { convertDateFormat } from "@/utils/utils";

export default function ProjectsComponent({
  id,
  name,
  html_url,
  description,
  created_at,
  updated_at,
  homepage,
  license,
  topics,
  language,
}: interfaces.GithubReposProps) {
  return (
    <>
      <article
        key={id}
        className="keen-slider__slide mb-8 flex flex-col-reverse items-center justify-end gap-6 px-6 xl:flex-row xl:justify-between xl:gap-20 xl:text-xl"
      >
        <aside className="w-full xl:w-1/2">
          <strong className="font-alt font-normal">{name}</strong>
          <p className="xl:text-base 2xl:text-xl">{description}</p>
          <section className="mt-4 flex flex-col gap-1 xl:mt-6 xl:text-base 2xl:text-xl">
            {license ? (
              <span className="font-alt font-normal">{license.name}</span>
            ) : null}
            <div className="flex items-center gap-1">
              <div className="xl:hidden">
                <ButtonComponent
                  isMobile
                  label="Github"
                  link={html_url}
                  ariaLabel="Check out the GitHub page for this project!"
                >
                  <ImGithub />
                </ButtonComponent>
              </div>
              <div className="hidden gap-1 xl:flex">
                <span className="font-alt font-normal">Github:</span>
                <Link
                  href={html_url ?? ""}
                  className="font-sans underline-offset-2"
                >
                  {html_url}
                </Link>
              </div>
            </div>
            {homepage ? (
              <div className="flex items-center gap-1">
                <span className="font-alt font-normal">Link:</span>
                <Link
                  href={homepage ?? ""}
                  className="font-sans underline-offset-2"
                >
                  {homepage}
                </Link>
              </div>
            ) : null}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <span className="font-alt font-normal">Created at:</span>
                <p>{convertDateFormat(created_at)}</p>
              </div>
              <div className="flex items-center gap-1">
                <span className="font-alt font-normal">Updated at:</span>
                <p>{convertDateFormat(updated_at)}</p>
              </div>
            </div>
          </section>
          {language && (
            <div className="flex items-center gap-1">
              <span className="font-alt font-normal xl:text-base 2xl:text-xl">
                Related Languages:
              </span>
              <p className="xl:text-base 2xl:text-xl">{language}</p>
            </div>
          )}
          {topics ? (
            <ul className="mt-8 flex w-full flex-wrap items-center gap-2">
              {topics.map((item: string) => (
                <li
                  key={item}
                  className="rounded-full bg-color-two p-1 px-6 font-alt text-sm font-normal text-color-eight xl:text-xs 2xl:text-base"
                >
                  {item}
                </li>
              ))}
            </ul>
          ) : null}
        </aside>

        <figure className="w-full xl:w-1/2">
          <div className="h-60 w-full rounded-3xl bg-color-two xl:h-[50vh]"></div>
        </figure>
      </article>
    </>
  );
}
