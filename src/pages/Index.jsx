import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Header from '../components/Header';
import ServiceCard from '../components/ServiceCard';
import PartnerLogo from '../components/PartnerLogo';

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
    }
  ];

  const partners = [
    { name: "Hospital Sírio-Libanês", logoUrl: "/img/placeholder-image.jpg" },
    { name: "Hospital Israelita Albert Einstein", logoUrl: "/img/placeholder-image.jpg" },
    { name: "Hospital Alemão Oswaldo Cruz", logoUrl: "/img/placeholder-image.jpg" },
    { name: "Hospital Moinhos de Vento", logoUrl: "/img/placeholder-image.jpg" },
    { name: "Hospital Samaritano", logoUrl: "/img/placeholder-image.jpg" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary to-white">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-20 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 md:pr-8">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">Consultoria Especializada em Saúde Digital</h1>
            <p className="text-xl text-gray-600 mb-10">Oferecemos soluções de consultoria personalizadas em saúde digital, tecnologia e inovação para otimizar processos, melhorar a qualidade dos serviços e impulsionar a transformação digital no setor de saúde.</p>
            <div className="flex justify-center space-x-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                Agende uma Consultoria
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 text-primary border-primary hover:bg-primary/10">Nossos Serviços</Button>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img 
              src="/img/healthcare-services.jpg" 
              alt="Consultoria em serviços de saúde digital" 
              className="rounded-lg shadow-lg w-full h-auto mx-auto object-cover" 
            />
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Nossos Serviços de Consultoria</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Nossos Parceiros</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {partners.map((partner, index) => (
              <PartnerLogo key={index} {...partner} />
            ))}
          </div>
        </section>

        <section className="text-center bg-primary text-white rounded-lg p-10">
          <h3 className="text-3xl font-bold mb-6">Pronto para Transformar sua Gestão em Saúde Digital?</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Entre em contato conosco hoje para uma avaliação gratuita e descubra como nossa consultoria pode ajudar sua instituição a alcançar novos patamares de excelência em saúde digital e tecnologia.</p>
          <Button size="lg" variant="secondary" className="text-primary bg-white hover:bg-gray-100 text-lg px-8">
            Solicite uma Proposta
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
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
