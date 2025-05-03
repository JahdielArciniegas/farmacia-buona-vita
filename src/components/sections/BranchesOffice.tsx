/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import { Suspense, use } from "react";
import getBranches from "@/service/branches";

const BranchesOffice = () => {
  const branches: Promise<
    {
      id: string;
      name: string;
      description: string;
      img: string;
    }[]
  > = getBranches();
  const allBranches = use(branches);
  return (
    <div className="w-full flex flex-col items-center justify-center py-4">
      <h3 className="text-4xl text-[var(--primary)]">Nuestras sucursales</h3>
      <Carousel className="w-8/12 h-[600px] flex items-center">
        <CarouselContent>
          <Suspense fallback={<div>Loading...</div>}>
            {allBranches.map((branche) => {
              return (
                <CarouselItem
                  className="flex flex-col items-center"
                  key={branche.id}
                >
                  <Card className="relative mx-32 h-[500px] w-[500px] overflow-hidden bg-transparent flex justify-center items-center">
                    <CardContent>
                      <img
                        src={`/branches/${branche.img}`}
                        alt={`Imagen de referencia a la farmacia ${branche.name}`}
                      />
                    </CardContent>
                  </Card>
                  <p className="text-2xl">{branche.name}</p>
                </CarouselItem>
              );
            })}
          </Suspense>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default BranchesOffice;
