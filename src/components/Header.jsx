import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Briefcase, Laptop, Stethoscope, GitBranch, BarChart } from 'lucide-react';
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
          <Link to="/">
            <img src="/img/logo-kure-azul.png" alt="Kure Saúde Logo" className="h-8 w-auto mr-2" />
          </Link>
          <span className="text-xl font-bold text-primary">Kure Saúde</span>
        </div>
        <nav className="flex items-center">
          <ul className="flex space-x-6 mr-6">
            {[
              { name: t('header.home'), icon: Briefcase, path: "/" },
              { name: t('header.digitalHealth'), icon: Laptop, path: "/services/digital-health" },
              { name: t('header.technology'), icon: BarChart, path: "/services/health-tech" },
              { name: t('header.programs'), icon: Stethoscope, path: "/services/health-programs" },
              { name: t('header.agileMethods'), icon: GitBranch, path: "/services/agile-methods" }
            ].map((item) => (
              <li key={item.name}>
                <Link to={item.path} className="flex items-center text-gray-600 hover:text-primary transition-colors">
                  <item.icon className="h-4 w-4 mr-1" />
                  {item.name}
                </Link>
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