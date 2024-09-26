import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-primary text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold mb-6">{t('cta.title')}</h3>
        <p className="text-xl mb-8 max-w-2xl mx-auto">{t('cta.description')}</p>
        <Button 
          size="lg" 
          variant="secondary" 
          className="text-primary bg-white hover:bg-gray-100 text-lg px-8"
        >
          {t('cta.button')}
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;