import { AvatarWithInfo } from "@/components/partials/avatar-with-info/avatar-with-info";
import { Button } from "@/components/ui/button";
import theme from "@/lib/tw-resolve-colors";
import { ArrowTopRightSvg } from "@/svgs/arrow-top-right.svg";
import Link from "next/link";

export function SocialView() {
  return (
    <section className="w-full py-28 bg-zinc-900">
      <div className="flex w-full flex-col content-box gap-24">
        <div className="flex items-center w-full gap-20">
          <AvatarWithInfo>
            <AvatarWithInfo.Avatar
              avatarImage="https://github.com/henriqueteixeiradev.png"
              size={150}
            />
          </AvatarWithInfo>

          <div className="flex flex-col gap-5">
            <span className="p-3 bg-zinc-700 w-fit rounded-md">
              Learn, Connect, and Innovate
            </span>
            <h2 className="font-semibold text-5xl">
              Be Part of the Future Tech Revolution
            </h2>

            <p className="text-muted-foreground text-lg mt-4">
              Immerse yourself in the world of future technology. Explore our
              comprehensive resources, connect with fellow tech enthusiasts, and
              drive innovation in the industry. Join a dynamic community of
              forward-thinkers.
            </p>
          </div>
        </div>

        <div className="grid items-center w-full grid-cols-3 border gap-5 p-5 bg-background rounded-xl">
          {[...Array(3)].map((_, i) => (
            <div
              className="flex flex-col flex-[45%] col-span-1 bg-zinc-900/60 p-10 rounded-xl border"
              key={i}
            >
              <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  Resource Access{" "}
                  <Link
                    href={"/"}
                    className="flex justify-center items-center bg-primary p-4 rounded-full hover:brightness-110 transition-all"
                  >
                    <ArrowTopRightSvg pathColor={theme.colors.black} />
                  </Link>
                </div>

                <p className="text-lg leading-relaxed text-muted-foreground">
                  Visitors can access a wide range of resources, including
                  ebooks, whitepapers, reports.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
