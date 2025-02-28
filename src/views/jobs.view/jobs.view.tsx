"use client";

import { SectionHeading } from "@/components/partials/section-heading/section-heading";
import { JobsListView } from "./jobs-list.view";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function JobsView() {
  const [stack, setStack] = useState("FrontEnd");

  const filteredData = data.filter((item) => item.category === stack);

  const handleFilterCategory = () => {
    const newCategory = new Set([...data.map((item) => item.category)]);

    return Array.from(newCategory);
  };

  return (
    <section className="w-full" id="jobs">
      <SectionHeading pretitle="Competence" title="Meus Projetos Recentes" />

      <div className="w-full py-12 border-y">
        <ul className="flex w-full items-center gap-5 content-box justify-around">
          {handleFilterCategory().map((buttonItem) => {
            return (
              <li key={buttonItem} className="w-full">
                <Button
                  className="w-fit"
                  variant={stack === buttonItem ? "secondary" : "outline"}
                  onClick={() => setStack(buttonItem)}
                >
                  {buttonItem}
                </Button>
              </li>
            );
          })}
        </ul>
      </div>

      <JobsListView data={filteredData} />
    </section>
  );
}

const data = [
  {
    id: 1,
    companyImage: "/images/jobs/nextjs.png",
    companyName: "Metodologia EAD",
    companyDescription: "Graduação e Pós-Graduação EAD",
    jobDate: "2021",
    jobTitle: "Web Site",
    jobDescription:
      "Este foi meu primeiro projeto como desenvolvedor front-end, utilizando NextJS. Aprendi muito sobre a importância de um bom design e uma boa arquitetura de código, e como isso pode impactar diretamente na experiência do usuário.",
    category: "FrontEnd",
    url: "https://metodologiaead.com.br",
  },
  {
    id: 2,
    companyImage: "/images/jobs/nextjs.png",
    companyName: "Metodologia EAD",
    companyDescription: "Graduação e Pós-Graduação EAD",
    jobDate: "2021",
    jobTitle: "Web Site",
    jobDescription:
      "Este foi meu primeiro projeto como desenvolvedor front-end, utilizando NextJS. Aprendi muito sobre a importância de um bom design e uma boa arquitetura de código, e como isso pode impactar diretamente na experiência do usuário.",
    category: "FrontEnd",
    url: "https://metodologiaead.com.br",
  },
  {
    id: 3,
    companyImage: "/images/jobs/nextjs.png",
    companyName: "Metodologia EAD",
    companyDescription: "Graduação e Pós-Graduação EAD",
    jobDate: "2021",
    jobTitle: "Web Site",
    jobDescription:
      "Este foi meu primeiro projeto como desenvolvedor front-end, utilizando NextJS. Aprendi muito sobre a importância de um bom design e uma boa arquitetura de código, e como isso pode impactar diretamente na experiência do usuário.",
    category: "FrontEnd",
    url: "https://metodologiaead.com.br",
  },
];
