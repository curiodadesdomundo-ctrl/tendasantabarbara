import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-amber-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">TSB</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Tenda Santa Bárbara</h1>
              <p className="text-xs text-gray-600">Padroeiro São Raimundo</p>
            </div>
          </div>

          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('sobre')} className="text-gray-700 hover:text-red-600 transition-colors">
              Sobre
            </button>
            <button onClick={() => scrollToSection('areas')} className="text-gray-700 hover:text-red-600 transition-colors">
              Áreas
            </button>
            <button onClick={() => scrollToSection('projetos')} className="text-gray-700 hover:text-red-600 transition-colors">
              Projetos
            </button>
            <button onClick={() => scrollToSection('impacto')} className="text-gray-700 hover:text-red-600 transition-colors">
              Impacto
            </button>
            <button onClick={() => scrollToSection('contato')} className="text-gray-700 hover:text-red-600 transition-colors">
              Contato
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-red-600"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <button onClick={() => scrollToSection('sobre')} className="block w-full text-left text-gray-700 hover:text-red-600 py-2">
              Sobre
            </button>
            <button onClick={() => scrollToSection('areas')} className="block w-full text-left text-gray-700 hover:text-red-600 py-2">
              Áreas
            </button>
            <button onClick={() => scrollToSection('projetos')} className="block w-full text-left text-gray-700 hover:text-red-600 py-2">
              Projetos
            </button>
            <button onClick={() => scrollToSection('impacto')} className="block w-full text-left text-gray-700 hover:text-red-600 py-2">
              Impacto
            </button>
            <button onClick={() => scrollToSection('contato')} className="block w-full text-left text-gray-700 hover:text-red-600 py-2">
              Contato
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
