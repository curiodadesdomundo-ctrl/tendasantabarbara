import { Target, Eye, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Quem Somos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-amber-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            A Tenda Santa Bárbara – Padroeiro São Raimundo é um Ponto de Cultura certificado que atua na promoção, valorização e fortalecimento da cultura afro-brasileira, das artes visuais e do artesanato tradicional no município de Presidente Sarney – Três Furos, Maranhão.
          </p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mt-4 leading-relaxed">
            Nosso trabalho é voltado à preservação da identidade cultural, ao incentivo à produção artística comunitária e à formação cultural de crianças, jovens e adultos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
            <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Target className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Missão</h3>
            <p className="text-gray-700 leading-relaxed">
              Promover, preservar e fortalecer as manifestações culturais afro-brasileiras, artesanais e artísticas da comunidade, garantindo acesso à cultura, formação e geração de oportunidades.
            </p>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
            <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Eye className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Visão</h3>
            <p className="text-gray-700 leading-relaxed">
              Ser referência regional na promoção da cultura viva, identidade afro-brasileira e desenvolvimento cultural comunitário.
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
            <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Heart className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Valores</h3>
            <ul className="text-gray-700 space-y-2">
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">•</span>
                <span>Valorização da ancestralidade</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">•</span>
                <span>Respeito à diversidade cultural</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">•</span>
                <span>Inclusão social</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">•</span>
                <span>Formação cidadã</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">•</span>
                <span>Fortalecimento comunitário</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">•</span>
                <span>Ética e transparência</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
