import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Clients = () => {
  return (
    <div className="sticky w-full flex flex-col h-[500px] justify-center items-center gap-4 py-4">
      <h3 className="text-4xl ">Testimonios de nuestros clientes</h3>
      <div className="flex gap-10 px-16 w-10/12">
        <Card className="w-1/3">
          <CardHeader className="h-24">
            <Avatar className="w-20 h-20">
              <AvatarImage src="/iconsPublic/ImgPerfil1.webp" />
              <AvatarFallback>RR</AvatarFallback>
            </Avatar>
            <CardTitle>Raul Rodriguez</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              “Estoy muy agradecido por el excelente servicio que recibí en la
              farmacia. Los farmacéuticos siempre están dispuestos a responder a
              mis preguntas y ofrecer consejos sobre mis medicamentos. Además,
              la opción de entrega a domicilio ha sido una gran ayuda para mí,
              especialmente durante los días más ocupados.“
            </p>
          </CardContent>
        </Card>
        <Card className="w-1/3">
          <CardHeader className="h-24">
            <Avatar className="w-20 h-20">
              <AvatarImage src="/iconsPublic/ImgPerfil2.webp" />
              <AvatarFallback>JP</AvatarFallback>
            </Avatar>
            <CardTitle>Juan Pérez</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              “La atención personalizada y el profesionalismo del personal de
              esta farmacia son excepcionales. Cada vez que visito, me siento
              bien atendido y valorado como cliente. Los asesores de salud
              siempre tienen recomendaciones útiles y los precios son muy
              competitivos.“
            </p>
          </CardContent>
        </Card>
        <Card className="w-1/3">
          <CardHeader className="h-24">
            <Avatar className="w-20 h-20">
              <AvatarImage src="/iconsPublic/ImgPerfil3.webp" />
              <AvatarFallback>LF</AvatarFallback>
            </Avatar>
            <CardTitle>Lucía Fernández</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              “Lo que más me gusta de esta farmacia es la facilidad para
              gestionar mis recetas y pedidos en línea. El sitio web es fácil de
              usar y puedo encontrar todo lo que necesito rápidamente. Además,
              la opción de recibir recordatorios para renovar mis recetas me ha
              ahorrado mucho tiempo.“
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Clients;
