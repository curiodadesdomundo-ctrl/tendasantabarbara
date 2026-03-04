import { Check, Award } from 'lucide-react';

const Impact = () => {
  const impacts = [
    'Inclusão cultural',
    'Geração de renda através do artesanato',
    'Valorização da cultura negra',
    'Formação artística comunitária',
    'Fortalecimento da identidade cultural',
  ];

  return (
    <section id="impacto" className="py-20 px-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Impacto Social
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-amber-500 mb-8"></div>
            <p className="text-xl mb-8 leading-relaxed text-gray-300">
              A Tenda Santa Bárbara atua diretamente em diversas frentes para transformar vidas e fortalecer nossa comunidade:
            </p>
            <ul className="space-y-4 mb-8">
              {impacts.map((impact, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-green-500 rounded-full p-1 mr-4 mt-1">
                    <Check size={16} />
                  </div>
                  <span className="text-lg text-gray-200">{impact}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-red-600 via-amber-500 to-orange-500 p-12 rounded-2xl shadow-2xl">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-8 text-center">
              <Award className="mx-auto mb-6" size={64} />
              <h3 className="text-3xl font-bold mb-6">Identidade Cultural</h3>
              <p className="text-lg leading-relaxed">
                Nosso espaço é símbolo de resistência cultural, preservação das tradições afro-brasileiras e fortalecimento da cultura viva em Presidente Sarney – Três Furos.
              </p>
              <div className="mt-8 pt-8 border-t border-white/30">
                <p className="text-sm opacity-90">Modelo institucional inspirado nas diretrizes do</p>
                <p className="font-bold text-xl mt-2">Programa Cultura Viva</p>
                <p className="text-sm opacity-90">Ministério da Cultura</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
