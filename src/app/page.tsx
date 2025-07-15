import { PawPrint } from "lucide-react";
import Image from "next/image";
import Button from "../components/Button";
import Card, { CardProps } from "../components/Card";
import NavBar from "../components/NavBar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";

const cards: Omit<CardProps, "index">[] = [
  {
    imageSrcLeft: "/halloween.jpg",
    imageSrcRight: "/halloween-2.jpg",
    title: "Especial Halloween!",
    description:
      "Fantasias, acessórios dentre outros itens para deixar seu pet no clima do Halloween.",
    link: "/halloween",
    button: "Ver itens",
  },
  {
    imageSrcLeft: "/mordendo-bolinha.jpg",
    imageSrcRight: "/melhor-brinquedo-para-cachorro-hiperativo-2-.png",
    title: "Novos brinquedos",
    description:
      "Adicionamos mais opções de brinquedos para diversão de seu pet!",
    link: "/novidades",
    button: "Novidades",
  },
  {
    imageSrcLeft: "/cachorro-gravata.jpg",
    title: "Avaliações de clientes",
    description:
      "Veja a opinião de nossos clientes sobre os produtos e serviços oferecidos.",
    link: "/avaliacoes",
    button: "Visitar",
  },
] as const;

const produtos = [
  {
    image: "/produto1.jpg",
    nome: "Brinquedo Mordedor",
    descricao: "Ideal para cães ativos e brincalhões.",
    preco: 39.9,
  },
  {
    image: "/produto2.jpg",
    nome: "Coleira Fashion",
    descricao: "Estilo e conforto para seu pet.",
    preco: 29.9,
  },
  {
    image: "/produto3.jpg",
    nome: "Cama Macia",
    descricao: "Descanso garantido para seu cão.",
    preco: 99.9,
  },
  {
    image: "/produto4.png",
    nome: "Petisco Natural",
    descricao: "Saudável e saboroso.",
    preco: 19.9,
  },
];

const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export default function Home() {
  return (
    <div className="w-screen min-h-screen bg-white text-black overflow-x-hidden">
      <NavBar />

      <div className="px-6 sm:px-12 md:px-24 lg:px-36 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="pt-0 md:pt-10 text-center md:text-left">
            <div className="text-3xl md:text-4xl font-semibold tracking-wider">
              <div>
                <span className="text-primary">Tudo</span>{" "}
                <span>para seu cão</span>
              </div>
              <div>
                <span>Em</span>{" "}
                <span className="text-primary">um só lugar!</span>
              </div>
            </div>

            <div className="text-zinc-600 mt-8 md:mt-12 mb-5">
              Uma loja online dedicada a proporcionar diversão e estilo para os
              adoráveis membros peludos de sua família. Navegue por nossa
              extensa coleção de brinquedos, acessórios e roupas. Vamos ajudar
              você a mimar seu melhor amigo com o que há de melhor no mundo dos
              pets.
            </div>

            <div className="space-x-4 flex justify-center md:justify-start">
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
          <div className="relative flex items-start justify-center w-full h-full mt-8 md:-mt-8">
            <Image
              src="/DogPrincipal.png"
              alt="Cachorro com brinquedo"
              width={450}
              height={500}
              className="object-contain w-[300px] h-auto md:w-[450px]"
              priority
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center md:justify-between gap-8 bg-primary px-6 md:px-12 mx-6 md:mx-24 rounded-4xl -mt-8 md:-mt-14 shadow-lg items-stretch">
        {cards.map((i, index) => (
          <Card
            key={index}
            index={index}
            button={i.button}
            imageSrcLeft={i.imageSrcLeft}
            imageSrcRight={i.imageSrcRight}
            title={i.title}
            description={i.description}
            link={i.link}
          />
        ))}
      </div>

      <div className="relative px-6 sm:px-12 md:px-24 mt-14 w-full">
        <div
          className="absolute inset-x-0 top-0 h-10 z-20 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.15), rgba(0,0,0,0))",
          }}
        />
        <div
          className="absolute inset-0 bg-[url('/background.png')] bg-repeat bg-center bg-contain opacity-15 z-0"
          style={{ backgroundSize: "300px 156px" }}
        />

        <div className="py-10 relative z-10">
          <div className="flex flex-col sm:flex-row items-center mb-4 justify-between w-full px-2 sm:px-10">
            <div className="flex flex-col items-center sm:items-start w-fit px-2 mb-4 sm:mb-0">
              <span className="flex gap-x-2 items-center text-3xl md:text-4xl font-semibold text-center">
                <PawPrint size={40} fill="black" />
                Mais Vendidos
              </span>
              <div className="mt-1 w-full h-1.5 bg-orange-500 rounded-full" />
            </div>
            <Button href="/mais-vendidos">Ver tudo</Button>
          </div>
        </div>

        <div className="max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto pb-24">
          <Carousel>
            <CarouselContent>
              {produtos.map((produto, idx) => {
                const currencyFormat = currencyFormatter.format(produto.preco);
                return (
                  <CarouselItem
                    key={idx}
                    className="basis-1/2 sm:basis-1/3 lg:basis-1/4"
                  >
                    <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 flex flex-col items-center justify-between h-auto min-h-[220px]">
                      <Image
                        src={produto.image}
                        alt={produto.nome}
                        width={120}
                        height={120}
                        className="rounded-xl object-cover mb-2 w-24 h-24 sm:w-32 sm:h-32"
                      />
                      <div className="text-sm font-medium text-black mb-1 text-center">
                        {produto.nome}
                      </div>
                      <div className="text-lg sm:text-xl mb-2 text-center">
                        {currencyFormat}
                      </div>
                      <Button className="bg-primary text-white px-4 py-2 rounded-xl w-full mt-2 text-sm sm:text-base">
                        Carrinho
                      </Button>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:inline-flex" />
            <CarouselNext className="hidden sm:inline-flex" />
          </Carousel>
        </div>
      </div>

      <div className="bg-primary w-full flex justify-center items-center py-1">
        <span className="text-white text-lg">
          Criado por{" "}
          <a
            href="https://github.com/wfabi0"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-semibold hover:text-orange-200 transition"
          >
            wfabi0
          </a>
        </span>
      </div>
    </div>
  );
}
