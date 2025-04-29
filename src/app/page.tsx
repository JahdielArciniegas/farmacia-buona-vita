import NavBar from "@/components/NavBar";
import BranchesOffice from "@/components/sections/BranchesOffice";
import Clients from "@/components/sections/Clients";
import Employees from "@/components/sections/Employees";
import Features from "@/components/sections/Features";
import FormContact from "@/components/sections/FormContact";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <NavBar />
      <Hero />
      <main className="flex w-full flex-col items-center justify-center gap-4">
        <div className="w-10/12 bg-[var(--muted)] rounded-l-3xl">
          <Employees />
          <Features />
        </div>
        <Clients />
        <div className="w-10/12 bg-[var(--muted)] rounded-r-3xl">
          <BranchesOffice />
          <FormContact />
        </div>
      </main>
    </div>
  );
}
