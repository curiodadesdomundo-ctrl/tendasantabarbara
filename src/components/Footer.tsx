const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-amber-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">TSB</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Tenda Santa Bárbara</h3>
                <p className="text-sm text-gray-400">Padroeiro São Raimundo</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Ponto de Cultura dedicado à preservação e fortalecimento da cultura afro-brasileira
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Navegação</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#sobre" className="hover:text-red-500 transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#areas" className="hover:text-red-500 transition-colors">
                  Áreas de Atuação
                </a>
              </li>
              <li>
                <a href="#projetos" className="hover:text-red-500 transition-colors">
                  Projetos
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-red-500 transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Presidente Sarney – Três Furos</li>
              <li>Maranhão – Brasil</li>
              <li>
                <a href="tel:+5598981652322" className="hover:text-red-500 transition-colors">
                  (98) 98165-2322
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/tendas.barbarap.s.raimund"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-500 transition-colors"
                >
                  @tendas.barbarap.s.raimund
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            {new Date().getFullYear()} Tenda Santa Bárbara – Padroeiro São Raimundo. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Programa Cultura Viva - Ministério da Cultura
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
