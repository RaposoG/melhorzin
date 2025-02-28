import Image from "next/image";

export default function Home() {
  return (
    // Quero colocar o nome e imagem centralizados
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center">
        <Image
          src="/images/andre.png"
          alt="andre"
          width={200}
          height={200}
          className="rounded-full"
        />
        <h1 className="text-4xl font-bold mt-4">André</h1>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold mt-4">Sobre mim</h2>
        <p className="text-lg mt-2">
          Olá, meu nome é André e sou um desenvolvedor web com experiência em
          Next.js, React e TypeScript.
        </p>
        <p className="text-lg mt-2">
          Estou sempre buscando aprender novas tecnologias e melhorar minhas
          habilidades.
        </p>
        <p className="text-lg mt-2">
          Estou animado para compartilhar meu conhecimento e aprender com
          outros.
        </p>
      </div>
    </main>
  );
}
