import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <img src="/logo-kure-azul.png" alt="Kure Saúde Logo" className="h-12 mb-4" />
            <h3 className="text-xl font-bold mb-2">{t('footer.companyName')}</h3>
            <p>{t('footer.description')}</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">{t('footer.contact')}</h4>
            <p>{t('footer.email')}: info@kuresaude.com</p>
            <p>{t('footer.phone')}: +55 11 1234-5678</p>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">{t('footer.followUs')}</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300" aria-label={t('footer.linkedinAria')}>
                LinkedIn
              </a>
              <a href="#" className="hover:text-gray-300" aria-label={t('footer.twitterAria')}>
                Twitter
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;