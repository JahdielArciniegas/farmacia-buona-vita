import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const FormContact = () => {
  return (
    <div className="w-full flex justify-center py-4">
      <Card className="w-1/2 h-96 flex justify-center items-center">
        <CardHeader className="w-full text-center">
          <CardTitle>Contactanos</CardTitle>
        </CardHeader>
        <CardContent className="w-8/12">
          <form action="" className="w-full flex flex-col gap-4">
            <div>
              <Label>Inserte el nombre de sucursal</Label>
              <Input placeholder="Barrio San Miguel" />
            </div>
            <div>
              <Label>Escriba su mensaje</Label>
              <Textarea placeholder="Escriba aqui..." />
            </div>
            <Button>Enviar Mensaje</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default FormContact;
