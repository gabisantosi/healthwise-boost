import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Laptop, Stethoscope, GitBranch, BarChart, Zap, Mail } from 'lucide-react';

const iconMap = {
  "Saúde Digital": Laptop,
  "Tecnologia em Saúde": BarChart,
  "Desenvolvimento de Programas de Saúde": Stethoscope,
  "Metodologias Ágeis em Saúde": GitBranch,
  "Transformação Digital em Saúde": Zap,
  "Integração com Google Workspace": Mail
};

const ServiceCard = ({ title, description }) => {
  const { t } = useTranslation();
  const Icon = iconMap[title] || Laptop;

  return (
    <Card className="text-center hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex justify-center mb-4">
          <Icon className="h-12 w-12 text-primary" />
        </div>
        <CardTitle className="text-xl mb-2">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default ServiceCard;
