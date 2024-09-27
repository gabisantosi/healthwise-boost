import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Laptop, Stethoscope, GitBranch, BarChart, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ icon: Icon, title, description, link }) => (
  <Card className="text-center hover:shadow-lg transition-shadow">
    <Link to={link} className="block h-full">
      <CardHeader>
        <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
        <CardTitle className="text-xl mb-2">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Link>
  </Card>
);

const Services = () => {
  const { t } = useTranslation();

  const services = [
    { icon: Laptop, title: t('services.digitalHealth.title'), description: t('services.digitalHealth.description'), link: '/services/digital-health' },
    { icon: BarChart, title: t('services.healthTech.title'), description: t('services.healthTech.description'), link: '/services/health-tech' },
    { icon: Stethoscope, title: t('services.healthPrograms.title'), description: t('services.healthPrograms.description'), link: '/services/health-programs' },
    { icon: GitBranch, title: t('services.agileMethods.title'), description: t('services.agileMethods.description'), link: '/services/agile-methods' },
    { icon: Zap, title: t('services.digitalTransformation.title'), description: t('services.digitalTransformation.description'), link: '/services/digital-transformation' },
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