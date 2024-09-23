import React from 'react';
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Stethoscope, Clipboard, Activity, HeartPulse, Users, BookOpen, PenTool } from "lucide-react";
import Header from '../components/Header';
import ServiceCard from '../components/ServiceCard';

const Index = () => {
  const services = [
    { title: "Gestão Hospitalar", description: "Otimize processos e melhore a eficiência operacional.", icon: Clipboard },
    { title: "Acreditação", description: "Prepare sua instituição para certificações de qualidade.", icon: CheckCircle2 },
    { title: "Consultoria em Saúde", description: "Estratégias para melhorar o desempenho e qualidade do atendimento.", icon: Stethoscope }
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
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Nossos Serviços Especializados</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </section>

        <section className="bg-blue-50 rounded-lg p-10 mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Nossa Missão na Kure Saúde</h2>
          <div className="text-lg text-gray-700 space-y-6">
            <p>
              Na <strong>Kure Saúde</strong>, nosso propósito é <em>empoderar vidas através de cuidados de saúde de qualidade</em>. 
              Somos especialistas em <strong>saúde pública</strong>, oferecendo consultoria especializada em áreas críticas como 
              <strong> saúde materna</strong>, <strong>pediatria</strong> e <strong>geriatria</strong>, preenchendo lacunas importantes no sistema de saúde brasileiro.
            </p>
            <div className="flex items-center justify-center space-x-8 my-8">
              <div className="flex flex-col items-center">
                <Users className="h-12 w-12 text-blue-600 mb-2" />
                <span className="font-semibold">Saúde Pública</span>
              </div>
              <div className="flex flex-col items-center">
                <HeartPulse className="h-12 w-12 text-blue-600 mb-2" />
                <span className="font-semibold">Saúde Materna</span>
              </div>
              <div className="flex flex-col items-center">
                <Activity className="h-12 w-12 text-blue-600 mb-2" />
                <span className="font-semibold">Pediatria</span>
              </div>
              <div className="flex flex-col items-center">
                <Stethoscope className="h-12 w-12 text-blue-600 mb-2" />
                <span className="font-semibold">Geriatria</span>
              </div>
            </div>
            <p>
              Nosso compromisso vai além da consultoria. Através de <strong>gestão de projetos inovadores</strong>, 
              <strong> pesquisa avançada em saúde</strong>, <strong>palestras informativas</strong>, <strong>eventos educacionais</strong> e 
              <strong> treinamentos especializados</strong>, estamos empenhados em promover conhecimento e impulsionar mudanças positivas no setor de saúde.
            </p>
            <div className="flex items-center justify-center space-x-8 my-8">
              <div className="flex flex-col items-center">
                <Clipboard className="h-12 w-12 text-blue-600 mb-2" />
                <span className="font-semibold">Gestão de Projetos</span>
              </div>
              <div className="flex flex-col items-center">
                <BookOpen className="h-12 w-12 text-blue-600 mb-2" />
                <span className="font-semibold">Pesquisa em Saúde</span>
              </div>
              <div className="flex flex-col items-center">
                <PenTool className="h-12 w-12 text-blue-600 mb-2" />
                <span className="font-semibold">Treinamentos</span>
              </div>
            </div>
            <p>
              Nossa missão é <strong>transformar a saúde das comunidades</strong>, capacitando indivíduos e instituições 
              a tomar decisões informadas para uma <em>vida mais saudável e feliz</em>. Na Kure Saúde, acreditamos que 
              o acesso à informação de qualidade e serviços de saúde eficientes são fundamentais para construir um 
              futuro mais saudável para todos.
            </p>
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
