import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const ServiceCard = ({ title, description }) => (
  <Card className="text-center hover:shadow-lg transition-shadow">
    <CardHeader>
      <div className="flex justify-center">
        <img 
          src="/img/icon-kure-azul.png" 
          alt={`Ícone de ${title}`} 
          className="h-20 w-20 object-contain mb-4"
        />
      </div>
      <CardTitle className="text-xl mb-2">{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
  </Card>
);

export default ServiceCard;