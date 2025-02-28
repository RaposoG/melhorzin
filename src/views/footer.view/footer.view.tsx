import { Button } from "@/components/ui/button";
import Link from "next/link";

export function FooterView() {
  return (
    <footer>
      <div className="flex flex-col w-full content-box">
        <div className="grid grid-cols-5 w-full gap-20 py-20">
          {["Home", "News", "Blogs", "Podcasts", "Resources"].map((item, i) => (
            <div key={i} className="flex flex-col gap-9">
              <h2 className="text-xl font-semibold">{item}</h2>

              <ul className="flex flex-col gap-4">
                {[
                  "Features",
                  "Blogs",
                  "Resources",
                  "Testimonials",
                  "Contact Us",
                  "Newslatter",
                ].map((item) => (
                  <li key={item}>
                    <Link href="" className="text-muted-foreground/50 text-lg">
                      item {item}
                      {false && (
                        <span
                          className={"py-1 px-3 bg-zinc-900/60 rounded-lg ml-2"}
                        >
                          New
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between py-10 border-t">
          <div className="flex items-center">
            <Button
              variant="link"
              size={"lg"}
              asChild
              className="text-muted-foreground text-lg pl-0"
            >
              <Link href="">Terms & Conditions</Link>
            </Button>

            <div className=" border-l h-4" />

            <Button
              variant="link"
              asChild
              className="text-muted-foreground text-lg"
            >
              <Link href="">Privacy Policy</Link>
            </Button>
          </div>

          <ul className="flex items-center gap-4">
            <li>
              <Link href="/">A</Link>
            </li>
            <li>
              <Link href="/">B</Link>
            </li>
            <li>
              <Link href="/">C</Link>
            </li>
          </ul>

          <p className="text-muted-foreground text-lg">
            © 2024 FutureTech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
