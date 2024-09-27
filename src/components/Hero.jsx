import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import ScheduleModal from './ScheduleModal';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://i.ibb.co/drh2Cz6/photo-02.jpg')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/80"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-5xl font-bold mb-6 leading-tight text-white">{t('hero.title')}</h1>
        <p className="text-xl mb-10 max-w-3xl mx-auto text-white">{t('hero.subtitle')}</p>
        <div className="flex justify-center space-x-4">
          <ScheduleModal />
          <Button 
            size="lg" 
            variant="secondary"
            className="text-lg px-8 bg-white text-primary hover:bg-gray-100 transition-colors"
          >
            {t('hero.servicesButton')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;