import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const ServiceCard = ({ title, description }) => (
  <Card className="text-center hover:shadow-lg transition-shadow">
    <CardHeader>
      <CardTitle className="text-xl mb-2">{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
  </Card>
);

export default ServiceCard;
