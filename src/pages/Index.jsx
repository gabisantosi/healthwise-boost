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
              Na <strong>Kure Saúde</strong>, nossa missão é transformar e aprimorar os serviços de saúde no Brasil 
              através de consultoria especializada e gestão eficiente. Trabalhamos incansavelmente para:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Otimizar processos e reduzir custos operacionais em instituições de saúde</li>
              <li>Implementar soluções inovadoras que elevam a qualidade do atendimento ao paciente</li>
              <li>Desenvolver estratégias personalizadas para enfrentar desafios complexos de saúde pública</li>
              <li>Capacitar profissionais de saúde com as melhores práticas e conhecimentos atualizados</li>
            </ul>
            <p>
              Nosso compromisso é fazer a diferença real na saúde e bem-estar das comunidades em todo o Brasil, 
              promovendo um sistema de saúde mais eficiente, acessível e centrado no paciente.
            </p>
          </div>
        </section>

        <section className="mb-20 bg-blue-100 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-center text-blue-800 mb-6">Nosso Foco</h3>
          <div className="text-lg text-blue-700 space-y-4 max-w-3xl mx-auto">
            <p>
              A Kure Saúde concentra seus esforços em áreas críticas para o aprimoramento do sistema de saúde:
            </p>
            <ul className="list-none space-y-2">
              <li>🔍 Análise detalhada de processos e fluxos de trabalho em instituições de saúde</li>
              <li>💡 Desenvolvimento de soluções personalizadas para desafios específicos</li>
              <li>🚀 Implementação de tecnologias inovadoras para melhorar a eficiência operacional</li>
              <li>👥 Treinamento e capacitação de equipes de saúde</li>
              <li>📊 Monitoramento contínuo e avaliação de resultados para garantir melhorias sustentáveis</li>
            </ul>
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
