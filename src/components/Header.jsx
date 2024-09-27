import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: t('header.home'), path: "/" },
    { name: t('header.digitalHealth'), path: "/services/digital-health" },
    { name: t('header.technology'), path: "/services/health-tech" },
    { name: t('header.programs'), path: "/services/health-programs" },
    { name: t('header.agileMethods'), path: "/services/agile-methods" }
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img src="/img/logo-kure-azul.png" alt="Kure Saúde Logo" className="h-8 w-auto mr-2" />
            <span className="text-xl font-bold text-primary">Kure Saúde</span>
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <Link key={item.path} to={item.path} className="text-gray-600 hover:text-primary transition-colors">
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center">
            <Select onValueChange={changeLanguage} defaultValue={i18n.language} className="mr-4">
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pt">Português</SelectItem>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="sv">Svenska</SelectItem>
                <SelectItem value="es">Español</SelectItem>
              </SelectContent>
            </Select>
            <button className="md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-white">
          <ul className="flex flex-col items-center py-4">
            {menuItems.map((item) => (
              <li key={item.path} className="w-full">
                <Link
                  to={item.path}
                  className="block py-2 px-4 text-center text-gray-600 hover:bg-gray-100 hover:text-primary transition-colors"
                  onClick={toggleMenu}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;