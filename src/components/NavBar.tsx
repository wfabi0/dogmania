"use client";

import { CircleUser, Dog, Menu, Search, ShoppingCart, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./NavLink";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#ed9256] py-4 px-6 sm:px-12 md:px-28 justify-between flex flex-row items-center w-full relative">
      <Link
        className="flex text-white font-semibold text-2xl md:text-3xl items-center gap-1 group transition-all duration-300 ease-in-out hover:text-black hover:scale-105 hover:-translate-y-0.5"
        href={"/"}
      >
        <Dog className="h-8 w-8 md:h-10 md:w-10 transition-colors duration-300 group-hover:text-black" />
        <span>DogMania</span>
      </Link>
      <div className="hidden lg:flex items-center justify-center gap-x-6">
        <div className="gap-x-10 flex">
          <NavLink text="Início" link="/" />
          <NavLink text="Produtos" link="/produtos" />
          <NavLink text="Contato" link="/contato" />
          <NavLink text="Sobre nós" link="/sobre-nos" />
        </div>
        <div className="flex gap-x-3">
          <a
            href=""
            className="text-white p-2 rounded-full transition-colors duration-300 hover:bg-white/20"
          >
            <Search />
          </a>
          <a
            href=""
            className="text-white p-2 rounded-full transition-colors duration-300 hover:bg-white/20"
          >
            <ShoppingCart />
          </a>
          <a
            href=""
            className="text-white p-2 rounded-full transition-colors duration-300 hover:bg-white/20"
          >
            <CircleUser />
          </a>
        </div>
      </div>
      <div className="lg:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white p-2 rounded-full transition-colors duration-300 hover:bg-white/20"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#ed9256] z-50 flex flex-col items-center p-4 gap-y-4">
          <NavLink text="Início" link="/" />
          <NavLink text="Produtos" link="/produtos" />
          <NavLink text="Contato" link="/contato" />
          <NavLink text="Sobre nós" link="/sobre-nos" />
          <div className="flex gap-x-3 mt-2">
            <a
              href=""
              className="text-white p-2 rounded-full transition-colors duration-300 hover:bg-white/20"
            >
              <Search />
            </a>
            <a
              href=""
              className="text-white p-2 rounded-full transition-colors duration-300 hover:bg-white/20"
            >
              <ShoppingCart />
            </a>
            <a
              href=""
              className="text-white p-2 rounded-full transition-colors duration-300 hover:bg-white/20"
            >
              <CircleUser />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
