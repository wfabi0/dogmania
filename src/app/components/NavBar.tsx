import { CircleUser, Dog, Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import NavLink from "./NavLink";

export default function NavBar() {
    return (
        <nav className="bg-orange-300 py-6 px-28 justify-between flex flex-row items-center w-full">
            <Link
                className="flex text-white font-semibold text-3xl items-center gap-1 group transition-all duration-300 ease-in-out  hover:text-black hover:scale-105 hover:-translate-y-0.5"
                href={"/"}
            >
                <Dog className="h-10 w-10 transition-colors duration-300 group-hover:text-black" />
                <span>DogMania</span>
            </Link>
            <div className="flex items-center justify-center gap-x-6">
                <div className="gap-x-10 flex">
                    <NavLink text="Início" link="/" />
                    <NavLink text="Produtos" link="/produtos" />
                    <NavLink text="Contato" link="/contato" />
                    <NavLink text="Sobre nós" link="/sobre-nos" />
                </div>
                <div className="flex gap-x-3">
                    <a href="" className="text-white p-2  rounded-full transition-colors duration-300 hover:bg-white/20">
                        <Search />
                    </a>
                    <a href="" className="text-white p-2 rounded-full transition-colors duration-300 hover:bg-white/20">
                        <ShoppingCart />
                    </a>
                    <a href="" className="text-white p-2  rounded-full transition-colors duration-300 hover:bg-white/20">
                        <CircleUser />
                    </a>
                </div>
            </div>
        </nav>
    )
}