import Image from "next/image";
import Button from "./components/Button";
import Card, { CardProps } from "./components/Card";
import NavBar from "./components/NavBar";

const cards: Omit<CardProps, "key">[] = [
  {
    imageSrcLeft: "/card1a.png",
    imageSrcRight: "/card1b.png",
    title: "Especial Halloween!",
    description:
      "Fantasias, acessórios dentre outros itens para deixar seu pet no clima do Halloween.",
    link: "/halloween",
    button: "Ver itens",
  },
  {
    imageSrcLeft: "/card2a.png",
    imageSrcRight: "/card2b.png",
    title: "Novos brinquedos",
    description:
      "Adicionamos mais opções de brinquedos para diversão de seu pet!",
    link: "/novidades",
    button: "Novidades",
  },
  {
    imageSrcLeft: "/card3a.png",
    imageSrcRight: "/card3b.png",
    title: "Avaliações de clientes",
    description:
      "Veja a opinião de nossos clientes sobre os produtos e serviços oferecidos.",
    link: "/avaliacoes",
    button: "Visitar",
  },
] as const;

export default function Home() {
  return (
    <div className="w-screen min-h-screen bg-white text-black pb-10">
      <NavBar />
      <div className="px-36 py-24">
        <div className="grid grid-cols-2">
          <div className="pt-10">
            <div className="text-4xl font-semibold tracking-wider">
              <div>
                <span className="text-primary">Tudo</span>{" "}
                <span>para seu cão</span>
              </div>
              <div>
                <span>Em</span>{" "}
                <span className="text-primary">um só lugar!</span>
              </div>
            </div>

            <div className="text-zinc-600 mt-12 mb-5">
              Uma loja online dedicada a proporcionar diversão e estilo para os
              adoráveis membros peludos de sua família. Navegue por nossa
              extensa coleção de brinquedos, acessórios e roupas. Vamos ajudar
              você a mimar seu melhor amigo com o que há de melhor no mundo dos
              pets.
            </div>

            <div className="space-x-4">
              <Button
                href="/loja"
                className="p-2 px-5 bg-primary rounded-2xl text-white"
              >
                Ver loja
              </Button>
              <Button href="/sobre-nos" className="p-2 px-5" variant="outline">
                Sobre nós
              </Button>
            </div>
          </div>
          <div className="relative flex items-start justify-center w-full h-full -mt-8">
            <Image
              src="/DogPrincipal.png"
              alt="Cachorro com brinquedo"
              width={450}
              height={500}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-8 bg-primary px-12 mx-24 rounded-4xl -mt-14">
        {cards.map((i, index) => (
          <Card
            key={index}
            button={i.button}
            imageSrcLeft={i.imageSrcLeft}
            imageSrcRight={i.imageSrcRight}
            title={i.title}
            description={i.description}
            link={i.link}
          />
        ))}
      </div>
    </div>
  );
}
