import Image from "next/image";
import Button from "./Button";

export interface CardProps {
  key: number;
  imageSrc?: string;
  imageSrcLeft?: string;
  imageSrcRight?: string;
  title: string;
  description: string;
  link: string;
  button: string;
}

export default function Card({
  key,
  imageSrc,
  imageSrcLeft,
  imageSrcRight,
  title,
  description,
  link,
  button,
}: CardProps) {
  return (
    <div
      key={key}
      className="bg-[#f0f0f0] rounded-2xl shadow-xl p-8 w-1/3 -translate-y-10 hover:-translate-y-16 transition-transform duration-300 border border-zinc-100 flex flex-col items-center"
      style={{ zIndex: 10 - key }}
    >
      <div className="flex items-center justify-center gap-4 mb-4">
        {imageSrcLeft && (
          <Image
            src={imageSrcLeft}
            alt={title + " esquerda"}
            width={60}
            height={60}
          />
        )}
        {imageSrc && !imageSrcLeft && !imageSrcRight && (
          <Image src={imageSrc} alt={title} width={80} height={80} />
        )}
        {imageSrcRight && (
          <Image
            src={imageSrcRight}
            alt={title + " direita"}
            width={60}
            height={60}
          />
        )}
      </div>
      <div className="text-xl font-bold mb-2 text-primary">{title}</div>
      <div className="text-sm text-black text-center mb-4">{description}</div>
      <Button
        href={link}
        className="p-2 px-5 bg-primary rounded-xl text-white mt-auto"
      >
        {button}
      </Button>
    </div>
  );
}
