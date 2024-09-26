import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import CaseStudies from '../components/CaseStudies';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const Index = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Services />
        <CaseStudies />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
