import Image from "next/image";

export default async function Home() {

  const result = await fetch("https://api.github.com/users/matheusvp2");
  const userData = await result.json()
  console.log(userData);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center">
        <Image
          src={userData.avatar_url}
          width={500}
          height={500}
          className="rounded-full"
          alt="Picture of the author"
        />
        <h1 className="text-4xl font-bold mt-4">Matheus Oliveira</h1>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold mt-4">Sobre mim</h2>
        <p className="text-lg mt-2">
          Olá, meu nome é Matheus e sou um arquiteto de software, com experiência em desenvolvimento de software voltado para o back-end.
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
