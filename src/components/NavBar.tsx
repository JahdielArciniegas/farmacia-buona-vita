import React from "react";
import { Button } from "./ui/button";

const NavBar = () => {
  return (
    <nav className="w-full bg-[var(--primary)] flex justify-around items-center">
      <div>
        <img src="/FarmaciaBuonaVitaLogo.png" alt="Logo" className="w-16 p-2" />
      </div>
      <ul className="flex gap-4">
        <li>
          <Button
            variant="link"
            className="cursor-pointer text-[var(--secondary)]"
          >
            Empleados
          </Button>
        </li>
        <li>
          <Button
            variant="link"
            className="cursor-pointer text-[var(--secondary)]"
          >
            Clientes
          </Button>
        </li>
        <li>
          <Button
            variant="link"
            className="cursor-pointer text-[var(--secondary)]"
          >
            Sucursales
          </Button>
        </li>
        <li>
          <Button
            variant="link"
            className="cursor-pointer text-[var(--secondary)]"
          >
            Contactanos
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
