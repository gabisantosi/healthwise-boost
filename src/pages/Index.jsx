import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Stethoscope, Clipboard, Activity, HeartPulse, Users } from "lucide-react";
import Header from '../components/Header';
import ServiceCard from '../components/ServiceCard';

const Index = () => {
  const services = [
    { 
      title: "Consultoria em Saúde Pública", 
      description: "Oferecemos soluções estratégicas para melhorar a eficiência e qualidade dos serviços de saúde pública.",
      icon: Users 
    },
    { 
      title: "Gestão de Saúde Materna", 
      description: "Desenvolvemos programas especializados para aprimorar o cuidado materno e infantil.",
      icon: HeartPulse 
    },
    { 
      title: "Otimização de Serviços Pediátricos", 
      description: "Implementamos práticas inovadoras para elevar o padrão de atendimento pediátrico.",
      icon: Activity 
    },
    { 
      title: "Aprimoramento de Cuidados Geriátricos", 
      description: "Criamos estratégias para melhorar a qualidade de vida e o atendimento à população idosa.",
      icon: Stethoscope 
    },
    { 
      title: "Gestão de Projetos em Saúde", 
      description: "Planejamos e executamos projetos inovadores para transformar a prestação de serviços de saúde.",
      icon: Clipboard 
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-20">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Transforme sua Gestão em Saúde com a Kure Saúde</h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">Soluções personalizadas e inovadoras para otimizar processos, reduzir custos e melhorar a qualidade do atendimento em sua instituição de saúde.</p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8">
              Agende uma Consulta
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">Saiba Mais</Button>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Nossa Missão na Kure Saúde</h2>
          <div className="text-lg text-gray-700 space-y-6 max-w-3xl mx-auto">
            <p>
              A <strong>Kure Saúde</strong> é uma empresa especializada em <em>consultoria e gestão de saúde</em>, 
              dedicada a transformar e aprimorar os serviços de saúde no Brasil. Nossa missão é:
            </p>
            <blockquote className="border-l-4 border-blue-500 pl-4 italic">
              "Elevar o padrão dos cuidados de saúde através de consultoria especializada, gestão eficiente 
              e inovação contínua, visando melhorar a qualidade de vida das comunidades e fortalecer o 
              sistema de saúde brasileiro."
            </blockquote>
            <p>
              Trabalhamos diretamente com instituições de saúde, governos e organizações para implementar 
              soluções práticas e eficazes que atendam às necessidades específicas de cada região e população. 
              Nosso foco está em:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Otimizar processos e reduzir custos operacionais</li>
              <li>Melhorar a qualidade e eficiência dos serviços de saúde</li>
              <li>Desenvolver estratégias personalizadas para desafios de saúde pública</li>
              <li>Capacitar profissionais de saúde com as melhores práticas do setor</li>
              <li>Implementar tecnologias inovadoras para aprimorar o atendimento ao paciente</li>
            </ul>
            <p>
              Com uma equipe de especialistas altamente qualificados e uma abordagem baseada em evidências, 
              a Kure Saúde está comprometida em fazer a diferença real na saúde e bem-estar das pessoas em 
              todo o Brasil.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Nossos Serviços Especializados</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </section>

        <section className="text-center bg-blue-600 text-white rounded-lg p-10">
          <h3 className="text-3xl font-bold mb-6">Pronto para Transformar sua Gestão em Saúde?</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Entre em contato conosco hoje para uma avaliação gratuita e descubra como podemos ajudar sua instituição a alcançar novos patamares de excelência.</p>
          <Button size="lg" variant="secondary" className="text-blue-600 bg-white hover:bg-gray-100 text-lg px-8">
            Fale Conosco
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <p className="text-center">&copy; 2024 Kure Saúde. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
