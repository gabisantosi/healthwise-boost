import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import ScheduleModal from './ScheduleModal';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://i.ibb.co/drh2Cz6/photo-02.jpg')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight text-white">
          {t('hero.title')}
        </h1>
        <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-10 max-w-3xl mx-auto text-white">
          {t('hero.subtitle')}
        </p>
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
          <ScheduleModal />
          <Button 
            size="lg" 
            variant="outline"
            className="text-base md:text-lg px-6 md:px-8 bg-transparent text-white border-white hover:bg-white hover:text-primary transition-colors"
          >
            {t('hero.servicesButton')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;