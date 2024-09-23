import React from 'react';

const Header = () => (
  <header className="bg-white shadow-md sticky top-0 z-10">
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <img 
        src="/img/kure_logo.png"
        alt="Kure Consultoria Logo" 
        className="h-12"
      />
      <nav>
        <ul className="flex space-x-6">
          {['Início', 'Serviços', 'Sobre', 'Blog', 'Contato'].map((item) => (
            <li key={item}>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">{item}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
