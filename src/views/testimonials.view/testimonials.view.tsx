import { AvatarWithInfo } from "@/components/partials/avatar-with-info/avatar-with-info";
import { SectionHeading } from "@/components/partials/section-heading/section-heading";
import { StarSvg } from "@/svgs/star.svg";

export function TestimonialsView() {
  return (
    <section className="w-full">
      <SectionHeading pretitle="depoimentos" title="Depoimentos de cliente" />

      <div className="grid grid-cols-3 border-t border-b">
        {[...Array(4)].map((_, index) => (
          <div
            className="flex flex-col  justify-center items-center gap-10 p-20 col-span-1 border-b border-r"
            key={index}
          >
            <AvatarWithInfo>
              <AvatarWithInfo.Avatar avatarImage="https://github.com/henriqueteixeiradev.png" />
              <AvatarWithInfo.Info name="Terezinha" role="Dona de casa" />
            </AvatarWithInfo>

            <div className="flex w-full flex-col relative p-7 border bg-zinc-900 rounded-xl">
              <div className="flex items-center absolute border py-3 px-4 gap-2 bg-background rounded-full -top-4 right-[50%] translate-x-[50%]">
                {[...Array(5)].map((_, index) => (
                  <StarSvg key={index} size={20} />
                ))}
              </div>
              <p className="text-base mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                sit cum quam quisquam, eveniet obcaecati commodi dicta sunt
                asperiores architecto expedita.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
