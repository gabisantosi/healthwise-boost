import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import Header from '../components/Header';
import ServiceCard from '../components/ServiceCard';

const Index = () => {
  const services = [
    { title: "Gestão Hospitalar", description: "Otimize processos e melhore a eficiência operacional." },
    { title: "Acreditação", description: "Prepare sua instituição para certificações de qualidade." },
    { title: "Consultoria Financeira", description: "Estratégias para melhorar o desempenho financeiro." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">Transforme sua Gestão em Saúde</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">Soluções personalizadas e inovadoras para otimizar processos, reduzir custos e melhorar a qualidade do atendimento em sua instituição de saúde.</p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8">Agende uma Consulta</Button>
            <Button size="lg" variant="outline" className="text-lg px-8">Saiba Mais</Button>
          </div>
        </section>

        <section className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-10">Nossos Serviços Especializados</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </section>

        <section className="bg-blue-50 rounded-lg p-10 mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-10">Por que escolher a Kure Consultoria?</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Equipe de especialistas com vasta experiência no setor de saúde",
              "Abordagem personalizada para cada cliente",
              "Resultados comprovados em melhoria de eficiência e qualidade",
              "Suporte contínuo durante e após a implementação"
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle2 className="text-green-500 mr-4 mt-1 flex-shrink-0" />
                <p className="text-lg">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center bg-blue-600 text-white rounded-lg p-10">
          <h3 className="text-3xl font-bold mb-6">Pronto para Transformar sua Gestão em Saúde?</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Entre em contato conosco hoje para uma avaliação gratuita e descubra como podemos ajudar sua instituição a alcançar novos patamares de excelência.</p>
          <Button size="lg" variant="secondary" className="text-blue-600 bg-white hover:bg-gray-100 text-lg px-8">Fale Conosco</Button>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <p className="text-center">&copy; 2024 Kure Consultoria. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
