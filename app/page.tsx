import Image from "next/image";

export default function Home() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                <h1>
                    Brayan Victor
                </h1>
                <p>Portfólio em construção</p>
                <Image
                        src="/animation.svg"
                        width={1980}
                        height={1980}
                        className="w-full  h-full"
                        alt="Gif"
                        draggable="false"
                        quality={100}
                    />
            </main>
        </div>
  );
}
