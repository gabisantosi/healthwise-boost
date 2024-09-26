import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative h-[90vh] flex items-center justify-center bg-gradient-to-r from-primary to-accent text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('/img/healthcare-services.jpg')] bg-cover bg-center opacity-20"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-5xl font-bold mb-6 leading-tight">{t('hero.title')}</h1>
        <p className="text-xl mb-10 max-w-3xl mx-auto">{t('hero.subtitle')}</p>
        <div className="flex justify-center space-x-4">
          <Button size="lg" variant="secondary" className="text-primary bg-white hover:bg-gray-100">
            {t('hero.scheduleButton')}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20">
            {t('hero.servicesButton')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
