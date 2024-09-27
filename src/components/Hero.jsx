import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import ScheduleModal from './ScheduleModal';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative h-[90vh] flex items-center justify-center bg-gradient-to-r from-primary to-accent text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('/photo-05.jpg')] bg-cover bg-center opacity-40"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-5xl font-bold mb-6 leading-tight">{t('hero.title')}</h1>
        <p className="text-xl mb-10 max-w-3xl mx-auto">{t('hero.subtitle')}</p>
        <div className="flex justify-center space-x-4">
          <ScheduleModal />
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20">
            {t('hero.servicesButton')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;