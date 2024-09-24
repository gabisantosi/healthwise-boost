import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Header from '../components/Header';
import ServiceCard from '../components/ServiceCard';
import PartnerLogo from '../components/PartnerLogo';
import ScheduleModal from '../components/ScheduleModal';

const Index = () => {
  const { t } = useTranslation();

  const services = [
    { 
      title: t('services.digitalHealth.title'), 
      description: t('services.digitalHealth.description')
    },
    { 
      title: t('services.healthTech.title'), 
      description: t('services.healthTech.description')
    },
    { 
      title: t('services.healthPrograms.title'), 
      description: t('services.healthPrograms.description')
    },
    { 
      title: t('services.agileMethods.title'), 
      description: t('services.agileMethods.description')
    },
    { 
      title: t('services.googleWorkspace.title'), 
      description: t('services.googleWorkspace.description')
    }
  ];

  const partners = [
    { name: "Hospital Sírio-Libanês", logoUrl: "/placeholder-image.jpg" },
    { name: "Hospital Israelita Albert Einstein", logoUrl: "/placeholder-image.jpg" },
    { name: "Hospital Alemão Oswaldo Cruz", logoUrl: "/placeholder-image.jpg" },
    { name: "Hospital Moinhos de Vento", logoUrl: "/placeholder-image.jpg" },
    { name: "Hospital Samaritano", logoUrl: "/placeholder-image.jpg" }
  ];

  const handleRequestProposal = () => {
    console.log("Solicitação de proposta iniciada");
    alert(t('cta.requestSent'));
  };

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <section className="relative h-screen flex items-center justify-center" aria-labelledby="hero-title">
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{backgroundImage: `url('/photo-02.jpg')`}}
            role="img"
            aria-label="Imagem de fundo representando tecnologia em saúde"
          ></div>
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <div className="container mx-auto px-4 py-12 relative z-20 text-white text-center">
            <h1 id="hero-title" className="text-5xl font-bold mb-6">{t('hero.title')}</h1>
            <p className="text-xl mb-10 max-w-3xl mx-auto">{t('hero.subtitle')}</p>
            <div className="flex justify-center space-x-4">
              <ScheduleModal />
              <Button size="lg" variant="outline" className="text-lg px-8 text-white border-white hover:bg-white/20">
                {t('hero.servicesButton')}
              </Button>
            </div>
          </div>
        </section>

        <section className="bg-white py-20" aria-labelledby="about-title">
          <div className="container mx-auto px-4">
            <h2 id="about-title" className="text-3xl font-bold text-center text-gray-800 mb-10">{t('about.title')}</h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg mb-6">{t('about.description')}</p>
              <p className="text-lg mb-6">{t('about.mission')}</p>
              <p className="text-lg">{t('about.vision')}</p>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-20" aria-labelledby="services-title">
          <div className="container mx-auto px-4">
            <h2 id="services-title" className="text-3xl font-bold text-center text-gray-800 mb-10">{t('services.title')}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20" aria-labelledby="partners-title">
          <div className="container mx-auto px-4">
            <h2 id="partners-title" className="text-3xl font-bold text-center text-gray-800 mb-10">{t('partners.title')}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {partners.map((partner, index) => (
                <PartnerLogo key={index} {...partner} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primary text-white py-20" aria-labelledby="cta-title">
          <div className="container mx-auto px-4 text-center">
            <h3 id="cta-title" className="text-3xl font-bold mb-6">{t('cta.title')}</h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto">{t('cta.description')}</p>
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-primary bg-white hover:bg-gray-100 text-lg px-8"
              onClick={handleRequestProposal}
            >
              {t('cta.button')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <p className="text-center">{t('footer.copyright')}</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
