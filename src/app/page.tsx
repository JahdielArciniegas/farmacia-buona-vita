import NavBar from "@/components/NavBar";
import Employees from "@/components/sections/Employees";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <NavBar />
      <Hero />
      <main className="w-10/12 bg-[var(--muted)] rounded-l-3xl">
        <Employees />
      </main>
    </div>
  );
}
