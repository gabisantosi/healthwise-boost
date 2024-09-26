import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Laptop, Stethoscope, GitBranch, BarChart, Zap } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }) => (
  <Card className="text-center hover:shadow-lg transition-shadow">
    <CardHeader>
      <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
      <CardTitle className="text-xl mb-2">{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
  </Card>
);

const Services = () => {
  const { t } = useTranslation();

  const services = [
    { icon: Laptop, title: t('services.digitalHealth.title'), description: t('services.digitalHealth.description') },
    { icon: BarChart, title: t('services.healthTech.title'), description: t('services.healthTech.description') },
    { icon: Stethoscope, title: t('services.healthPrograms.title'), description: t('services.healthPrograms.description') },
    { icon: GitBranch, title: t('services.agileMethods.title'), description: t('services.agileMethods.description') },
    { icon: Zap, title: t('services.digitalTransformation.title'), description: t('services.digitalTransformation.description') },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">{t('services.title')}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;