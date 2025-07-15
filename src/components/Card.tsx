import Image from "next/image";
import Button from "./Button";

export interface CardProps {
  index: number;
  imageSrc?: string;
  imageSrcLeft?: string;
  imageSrcRight?: string;
  title: string;
  description: string;
  link: string;
  button: string;
}

export default function Card({
  index,
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
      className="bg-[#f0f0f0] rounded-2xl shadow-xl p-8 w-1/3 -translate-y-10 hover:-translate-y-16 transition-transform duration-300 border border-zinc-100 flex flex-col items-center"
      style={{
        zIndex: typeof index === "number" && !isNaN(index) ? 10 - index : 0,
      }}
    >
      <div className="flex items-center justify-center mb-4 w-full">
        {imageSrcLeft && imageSrcRight ? (
          <>
            <div className="flex-1 flex justify-end">
              <Image
                src={imageSrcLeft}
                alt={title + " esquerda"}
                width={200}
                height={200}
                className="rounded-l-xl object-cover w-full h-[120px] max-w-[120px]"
                style={{ marginRight: 0, marginLeft: 0 }}
              />
            </div>
            <div className="flex-1 flex justify-start">
              <Image
                src={imageSrcRight}
                alt={title + " direita"}
                width={200}
                height={200}
                className="rounded-r-xl object-cover w-full h-[120px] max-w-[120px]"
                style={{ marginLeft: 0, marginRight: 0 }}
              />
            </div>
          </>
        ) : imageSrcLeft ? (
          <div className="flex justify-center w-full">
            <Image
              src={imageSrcLeft}
              alt={title + " esquerda"}
              width={120}
              height={120}
              className="rounded-xl object-cover"
            />
          </div>
        ) : imageSrcRight ? (
          <div className="flex justify-center w-full">
            <Image
              src={imageSrcRight}
              alt={title + " direita"}
              width={120}
              height={120}
              className="rounded-xl object-cover"
            />
          </div>
        ) : null}
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
