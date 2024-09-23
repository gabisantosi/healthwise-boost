import React from 'react';
import { Briefcase, Laptop, Stethoscope, GitBranch, BarChart } from 'lucide-react';

const Header = () => (
  <header className="bg-white shadow-md sticky top-0 z-10">
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <div className="flex items-center">
        <Stethoscope className="h-8 w-8 text-primary mr-2" />
        <span className="text-xl font-bold text-primary">Kure Saúde Digital</span>
      </div>
      <nav>
        <ul className="flex space-x-6">
          {[
            { name: 'Início', icon: Briefcase },
            { name: 'Saúde Digital', icon: Laptop },
            { name: 'Tecnologia', icon: BarChart },
            { name: 'Programas', icon: Stethoscope },
            { name: 'Metodologias Ágeis', icon: GitBranch }
          ].map((item) => (
            <li key={item.name}>
              <a href="#" className="flex items-center text-gray-600 hover:text-primary transition-colors">
                <item.icon className="h-4 w-4 mr-1" />
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
