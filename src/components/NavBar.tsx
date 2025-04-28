import React from "react";
import { Button } from "./ui/button";

const NavBar = () => {
  return (
    <nav className="w-full bg-[var(--secondary)] flex justify-around items-center">
      <div>
        <picture>
          <img
            src="/FarmaciaBuonaVitaLogo.webp"
            alt="Logo"
            className="w-16 p-1 m-2 bg-[var(--primary)] rounded-full"
          />
        </picture>
      </div>
      <ul className="flex gap-4">
        <li>
          <Button variant="link" className="cursor-pointer ">
            Empleados
          </Button>
        </li>
        <li>
          <Button variant="link" className="cursor-pointer ">
            Clientes
          </Button>
        </li>
        <li>
          <Button variant="link" className="cursor-pointer ">
            Sucursales
          </Button>
        </li>
        <li>
          <Button variant="link" className="cursor-pointer ">
            Contactanos
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
