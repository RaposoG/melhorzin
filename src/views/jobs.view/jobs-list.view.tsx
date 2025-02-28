import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowTopRightSvg } from "@/svgs/arrow-top-right.svg";

type JobsListViewProps = {
  id: number;
  companyImage: string;
  companyName: string;
  companyDescription: string;
  jobTitle: string;
  jobDescription: string;
  category: string;
  url: string;
  jobDate: string;
};

export function JobsListView({ data }: { data: JobsListViewProps[] }) {
  return (
    <>
      {data.map((item) => (
        <div key={item.id} className="w-full border-b">
          <div className="w-full content-box py-20 grid grid-cols-12">
            <div className="flex w-full col-span-4">
              <div className="flex items-center gap-4">
                <div
                  className="w-20 h-20 flex justify-center items-center rounded-full bg-cover bg-no-repeat bg-center"
                  style={{
                    backgroundImage: `url(${item.companyImage})`,
                  }}
                />

                <div className="flex flex-col">
                  <b className="text-xl">{item.companyName}</b>
                  <small className="text-muted-foreground text-lg">
                    {item.companyDescription}
                  </small>
                </div>
              </div>
            </div>

            <div className="col-span-8 w-full flex items-center justify-between gap-12">
              <div className="flex flex-col justify-center gap-7">
                <span className="text-xl text-muted-foreground">
                  {item.jobDate}
                </span>

                <div className="flex flex-col gap-2">
                  <h2 className="text-2xl font-semibold">{item.jobTitle}</h2>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {item.jobDescription}
                  </p>
                </div>

                <div>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>

              <Button variant="outline" size="lg" asChild>
                <Link href={item.url} target="_blank">
                  Ver Serviço <ArrowTopRightSvg size={14} className="m-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
