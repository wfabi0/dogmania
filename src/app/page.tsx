import Image from "next/image";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <div className="w-screen min-h-screen bg-white text-black">
      <NavBar />
    </div>
  );
}
