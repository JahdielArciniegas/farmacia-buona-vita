import React from "react";

const Employees = () => {
  return (
    <div className="flex gap-2 w-full justify-center p-20">
      <div className="flex flex-col justify-center items-center gap-1 w-1/2">
        <h3 className="text-4xl w-8/12">Conoce a nuestro equipo</h3>
        <p className="text-xl w-8/12">
          En nuestra farmacia, contamos con un equipo de profesionales dedicados
          a brindar la mejor atención y cuidado a nuestros clientes.
        </p>
      </div>
      <div className="w-1/2">
        <picture className="w-full flex justify-center">
          <img
            className="rounded-2xl w-8/12"
            src="/enfermerosFarmacia.jpeg"
            alt="Enfermeros de la farmacia buona vita"
          />
        </picture>
      </div>
    </div>
  );
};

export default Employees;
