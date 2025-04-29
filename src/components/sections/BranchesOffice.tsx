import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card, CardHeader } from "../ui/card";

const BranchesOffice = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-4">
      <h3 className="text-4xl text-[var(--primary)]">Nuestras sucursales</h3>
      <Carousel className="w-8/12 h-[600px] flex items-center">
        <CarouselContent>
          <CarouselItem className="flex flex-col items-center">
            <Card className="relative mx-32 h-[500px] w-[500px] overflow-hidden bg-transparent flex justify-center items-center">
              <CardHeader>
                <span className="absolute top-0 left-0 h-full w-full bg-[url('/braches/sucursal1.webp')] bg-cover -z-10"></span>
              </CardHeader>
            </Card>
            <p className="text-2xl">Barrio San Miguel</p>
          </CarouselItem>
          <CarouselItem className="flex flex-col items-center">
            <Card className="relative mx-32 h-[500px] w-[500px] overflow-hidden bg-transparent">
              <CardHeader>
                <span className="absolute top-0 left-0 h-full w-full bg-[url('/braches/sucursal2.webp')] bg-cover -z-10"></span>
              </CardHeader>
            </Card>
            <p className="text-2xl">Colonia Centro</p>
          </CarouselItem>
          <CarouselItem className="flex flex-col items-center">
            <Card className="relative mx-32 h-[500px] w-[500px] overflow-hidden bg-transparent">
              <CardHeader>
                <span className="absolute top-0 left-0 h-full w-full bg-[url('/braches/sucursal3.webp')] bg-cover -z-10"></span>
              </CardHeader>
            </Card>
            <p className="text-2xl">Urbanización Los Robles</p>
          </CarouselItem>
          <CarouselItem className="flex flex-col items-center">
            <Card className="relative mx-32 h-[500px] w-[500px] overflow-hidden bg-transparent">
              <CardHeader>
                <span className="absolute top-0 left-0 h-full w-full bg-[url('/braches/sucursal4.webp')] bg-cover -z-10"></span>
              </CardHeader>
            </Card>
            <p className="text-2xl">Villa del Sol</p>
          </CarouselItem>
          <CarouselItem className="flex flex-col items-center">
            <Card className="relative mx-32 h-[500px] w-[500px] overflow-hidden bg-transparent">
              <CardHeader>
                <span className="absolute top-0 left-0 h-full w-full bg-[url('/braches/sucursal5.webp')] bg-cover -z-10"></span>
              </CardHeader>
            </Card>
            <p className="text-2xl">Jardines de la Paz</p>
          </CarouselItem>
          <CarouselItem className="flex flex-col items-center">
            <Card className="relative mx-32 h-[500px] w-[500px] overflow-hidden bg-transparent">
              <CardHeader>
                <span className="absolute top-0 left-0 h-full w-full bg-[url('/braches/sucursal6.webp')] bg-cover -z-10"></span>
              </CardHeader>
            </Card>
            <p className="text-2xl">Comunidad El Refugio</p>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default BranchesOffice;
