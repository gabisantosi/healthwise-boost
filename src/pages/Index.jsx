import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Header from '../components/Header';
import ServiceCard from '../components/ServiceCard';
import PartnerLogo from '../components/PartnerLogo';
import ScheduleModal from '../components/ScheduleModal';

const Index = () => {
  const services = [
    { 
      title: "Saúde Digital", 
      description: "Implementação de soluções digitais para melhorar a eficiência e qualidade dos serviços de saúde."
    },
    { 
      title: "Tecnologia em Saúde", 
      description: "Consultoria em adoção e integração de tecnologias inovadoras no setor de saúde."
    },
    { 
      title: "Desenvolvimento de Programas de Saúde", 
      description: "Criação e implementação de programas personalizados para atender às necessidades específicas de instituições de saúde."
    },
    { 
      title: "Metodologias Ágeis em Saúde", 
      description: "Aplicação de princípios ágeis para melhorar a gestão e entrega de projetos no setor de saúde."
    },
    { 
      title: "Integração com Google Workspace", 
      description: "Otimização dos processos de saúde utilizando as ferramentas do Google Workspace para colaboração e produtividade."
    }
  ];

  const partners = [
    { name: "Hospital Sírio-Libanês", logoUrl: "/placeholder-image.jpg" },
    { name: "Hospital Israelita Albert Einstein", logoUrl: "/placeholder-image.jpg" },
    { name: "Hospital Alemão Oswaldo Cruz", logoUrl: "/placeholder-image.jpg" },
    { name: "Hospital Moinhos de Vento", logoUrl: "/placeholder-image.jpg" },
    { name: "Hospital Samaritano", logoUrl: "/placeholder-image.jpg" }
  ];

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
            <h1 id="hero-title" className="text-5xl font-bold mb-6">Consultoria Especializada em Tecnologia em Saúde</h1>
            <p className="text-xl mb-10 max-w-3xl mx-auto">Oferecemos soluções de consultoria personalizadas em tecnologia e inovação para o setor de saúde, otimizando processos, melhorando a qualidade dos serviços e impulsionando a transformação digital.</p>
            <div className="flex justify-center space-x-4">
              <ScheduleModal />
              <Button size="lg" variant="outline" className="text-lg px-8 text-white border-white hover:bg-white/20">Nossos Serviços</Button>
            </div>
          </div>
        </section>

        <section className="bg-white py-20" aria-labelledby="services-title">
          <div className="container mx-auto px-4">
            <h2 id="services-title" className="text-3xl font-bold text-center text-gray-800 mb-10">Nossos Serviços de Consultoria</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-20" aria-labelledby="partners-title">
          <div className="container mx-auto px-4">
            <h2 id="partners-title" className="text-3xl font-bold text-center text-gray-800 mb-10">Nossos Parceiros</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {partners.map((partner, index) => (
                <PartnerLogo key={index} {...partner} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primary text-white py-20" aria-labelledby="cta-title">
          <div className="container mx-auto px-4 text-center">
            <h3 id="cta-title" className="text-3xl font-bold mb-6">Pronto para Transformar sua Gestão em Tecnologia em Saúde?</h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Entre em contato conosco hoje para uma avaliação gratuita e descubra como nossa consultoria pode ajudar sua instituição a alcançar novos patamares de excelência em tecnologia e inovação em saúde.</p>
            <Button size="lg" variant="secondary" className="text-primary bg-white hover:bg-gray-100 text-lg px-8">
              Solicite uma Proposta
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <p className="text-center">&copy; 2024 Kure Saúde Consultoria. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
