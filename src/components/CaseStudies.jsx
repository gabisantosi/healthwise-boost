import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const CaseStudyCard = ({ title, description, result }) => (
  <Card className="hover:shadow-lg transition-shadow">
    <CardHeader>
      <CardTitle className="text-xl mb-2">{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="font-semibold text-primary">{result}</p>
    </CardContent>
  </Card>
);

const CaseStudies = () => {
  const { t } = useTranslation();

  const caseStudies = [
    { title: t('caseStudies.case1.title'), description: t('caseStudies.case1.description'), result: t('caseStudies.case1.result') },
    { title: t('caseStudies.case2.title'), description: t('caseStudies.case2.description'), result: t('caseStudies.case2.result') },
    { title: t('caseStudies.case3.title'), description: t('caseStudies.case3.description'), result: t('caseStudies.case3.result') },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">{t('caseStudies.title')}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy, index) => (
            <CaseStudyCard key={index} {...caseStudy} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;