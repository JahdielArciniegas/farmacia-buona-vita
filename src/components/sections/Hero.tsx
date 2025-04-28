import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className="w-full p-20 flex flex-col justify-center align-center -z-10">
      <div className="relative flex flex-col items-center justify-center gap-6">
        <div className="flex flex-col gap-0.5 items-center">
          <h1 className="text-6xl text-[var(--muted)]">Farmacia Buona Vita</h1>
          <p className="text-2xl">Porque tu salud es nuestra bendición</p>
        </div>
        <div className="flex flex-col gap-1 items-center bg-[var(--secondary)] rounded-2xl p-4">
          <strong>Bienvenido a nuestra farmacia en línea!</strong>
          <p className="w-80 text-center">
            Inicia sesión para poder contactarnos o acceder a nuestro app web
          </p>
          <Link href="/">
            <Button>Iniciar Sesión</Button>
          </Link>
        </div>
        <div>
          <picture>
            <img
              src="/enfermera.png"
              alt="Enfermera de la farmacia buona vita"
              className="w-1/2 object-contain absolute top-0 -left-16"
            />
          </picture>
        </div>
      </div>

      <span className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover bg-[var(--primary)] -z-50"></span>
    </div>
  );
};

export default Hero;
