import React from "react";
import { Card, CardDescription, CardTitle } from "../ui/card";

const Features = () => {
  return (
    <section className="w-full flex justify-center h-72">
      <div className="flex gap-4 w-11/12 h-60">
        <Card className="flex flex-col justify-center items-center w-1/4 h-11/12 ">
          <CardTitle className="text-4xl font-bold">10</CardTitle>
          <CardDescription className="w-10/12 text-center text-base">
            Productos para enfermedades diferentes
          </CardDescription>
        </Card>
        <Card className="flex flex-col justify-center items-center mt-4 w-1/4 h-11/12">
          <CardTitle className="text-4xl font-bold">6</CardTitle>
          <CardDescription className="text-base">
            Diferentes localidades
          </CardDescription>
        </Card>
        <Card className="flex flex-col justify-center items-center mt-8 w-1/4 h-11/12">
          <CardTitle className="text-4xl font-bold">1M</CardTitle>
          <CardDescription className="text-base">
            Clientes satisfechos
          </CardDescription>
        </Card>
        <Card className="flex flex-col justify-center items-center mt-12 w-1/4 h-11/12">
          <CardTitle className="text-4xl font-bold">24</CardTitle>
          <CardDescription className="text-base">
            Horas de atencion
          </CardDescription>
        </Card>
      </div>
    </section>
  );
};

export default Features;
