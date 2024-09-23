import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-600">Kure Consultoria</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Início</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Serviços</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Sobre</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Contato</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Consultoria em Saúde Especializada</h2>
          <p className="text-xl text-gray-600 mb-8">Soluções personalizadas para otimizar sua gestão em saúde</p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">Agende uma Consulta</Button>
        </section>

        <section className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { title: "Gestão Hospitalar", description: "Otimize processos e melhore a eficiência operacional." },
            { title: "Acreditação", description: "Prepare sua instituição para certificações de qualidade." },
            { title: "Consultoria Financeira", description: "Estratégias para melhorar o desempenho financeiro." }
          ].map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </section>

        <section className="bg-blue-50 rounded-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Por que escolher a Kure Consultoria?</h3>
          <ul className="space-y-4">
            {[
              "Equipe de especialistas com vasta experiência no setor de saúde",
              "Abordagem personalizada para cada cliente",
              "Resultados comprovados em melhoria de eficiência e qualidade",
              "Suporte contínuo durante e após a implementação"
            ].map((item, index) => (
              <li key={index} className="flex items-center">
                <CheckCircle2 className="text-green-500 mr-2" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Pronto para transformar sua gestão em saúde?</h3>
          <p className="text-lg text-gray-600 mb-8">Entre em contato conosco para uma avaliação gratuita</p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">Fale Conosco</Button>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Kure Consultoria em Saúde. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
