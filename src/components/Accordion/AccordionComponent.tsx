import * as interfaces from "@/types/interfaces";
import { questions } from "@/variables/data";

export function AccordionComponent() {
  return (
    <article className="mt-20">
      {questions &&
        questions.map((item: interfaces.QuestionsProps, index) => (
          <details key={item.title} className="mb-10">
            <summary className="relative mt-4 cursor-pointer list-none font-alt transition duration-300 ease-in after:absolute after:-bottom-4 after:left-0 after:h-[2px] after:w-full after:bg-black after:content-[''] dark:after:bg-white xl:text-xl">
              {item.title}
            </summary>
            <p className="py-16 text-justify">{item.information}</p>
          </details>
        ))}
    </article>
  );
}
