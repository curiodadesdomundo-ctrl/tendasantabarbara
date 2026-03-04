import { Palette, Hammer, Sparkles, Music } from 'lucide-react';

const Areas = () => {
  const areas = [
    {
      icon: Palette,
      title: 'Artes Visuais',
      description: 'Promoção de exposições, oficinas e incentivo à produção artística local.',
      color: 'from-red-600 to-red-700',
      bgColor: 'from-red-50 to-red-100',
    },
    {
      icon: Hammer,
      title: 'Artesanato em Madeira',
      description: 'Valorização do saber tradicional, geração de renda e fortalecimento da economia criativa.',
      color: 'from-amber-600 to-amber-700',
      bgColor: 'from-amber-50 to-amber-100',
    },
    {
      icon: Sparkles,
      title: 'Cultura Negra e Afro-brasileira',
      description: 'Resgate da ancestralidade, celebração da identidade e fortalecimento da memória cultural.',
      color: 'from-orange-600 to-orange-700',
      bgColor: 'from-orange-50 to-orange-100',
    },
    {
      icon: Music,
      title: 'Carimbó e Cultura Popular',
      description: 'Promoção de apresentações culturais, encontros e manifestações tradicionais.',
      color: 'from-yellow-600 to-yellow-700',
      bgColor: 'from-yellow-50 to-yellow-100',
    },
  ];

  return (
    <section id="areas" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Áreas de Atuação
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-amber-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Trabalhamos em diferentes frentes para promover e preservar a cultura local
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {areas.map((area, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${area.bgColor} p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2`}
            >
              <div className={`bg-gradient-to-br ${area.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                <area.icon className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{area.title}</h3>
              <p className="text-gray-700 leading-relaxed">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Areas;
