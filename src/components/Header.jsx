import React from 'react';
import { useTranslation } from 'react-i18next';
import { Briefcase, Laptop, Stethoscope, GitBranch, BarChart, Globe } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Stethoscope className="h-8 w-8 text-primary mr-2" />
          <span className="text-xl font-bold text-primary">Kure Saúde Digital</span>
        </div>
        <nav className="flex items-center">
          <ul className="flex space-x-6 mr-6">
            {[
              { name: t('header.home'), icon: Briefcase },
              { name: t('header.digitalHealth'), icon: Laptop },
              { name: t('header.technology'), icon: BarChart },
              { name: t('header.programs'), icon: Stethoscope },
              { name: t('header.agileMethods'), icon: GitBranch }
            ].map((item) => (
              <li key={item.name}>
                <a href="#" className="flex items-center text-gray-600 hover:text-primary transition-colors">
                  <item.icon className="h-4 w-4 mr-1" />
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <Select onValueChange={changeLanguage} defaultValue={i18n.language}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pt">Português</SelectItem>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="sv">Svenska</SelectItem>
              <SelectItem value="es">Español</SelectItem>
            </SelectContent>
          </Select>
        </nav>
      </div>
    </header>
  );
};

export default Header;
