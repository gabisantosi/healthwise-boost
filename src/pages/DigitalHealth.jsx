import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';

const DigitalHealth = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">{t('services.digitalHealth.title')}</h1>
        <p className="text-lg mb-6">{t('services.digitalHealth.description')}</p>
        <h2 className="text-2xl font-semibold mb-4">{t('services.digitalHealth.benefits')}</h2>
        <ul className="list-disc list-inside mb-6">
          <li>{t('services.digitalHealth.benefit1')}</li>
          <li>{t('services.digitalHealth.benefit2')}</li>
          <li>{t('services.digitalHealth.benefit3')}</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4">{t('services.digitalHealth.howWeHelp')}</h2>
        <p className="text-lg">{t('services.digitalHealth.helpDescription')}</p>
      </main>
      <Footer />
    </div>
  );
};

export default DigitalHealth;