import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Briefcase } from 'lucide-react';

const ServiceCard = ({ title, description }) => (
  <Card className="text-center hover:shadow-lg transition-shadow">
    <CardHeader>
      <div className="flex justify-center mb-4">
        <Briefcase className="h-12 w-12 text-primary" />
      </div>
      <CardTitle className="text-xl mb-2">{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
  </Card>
);

export default ServiceCard;
