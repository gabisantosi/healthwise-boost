import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AgileMethods = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">{t('services.agileMethods.title')}</h1>
        <p className="text-lg mb-6">{t('services.agileMethods.description')}</p>
        {/* Add more content here as needed */}
      </main>
      <Footer />
    </div>
  );
};

export default AgileMethods;