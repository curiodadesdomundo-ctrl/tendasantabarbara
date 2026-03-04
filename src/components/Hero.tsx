import { MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-red-600 via-amber-500 to-orange-500">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Tenda Santa Bárbara
          </h1>
          <p className="text-2xl md:text-3xl mb-4 font-semibold">
            Padroeiro São Raimundo
          </p>
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8">
            <MapPin size={20} />
            <span className="text-lg">Presidente Sarney – Três Furos, Maranhão</span>
          </div>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            Ponto de Cultura certificado dedicado à promoção, valorização e fortalecimento da cultura afro-brasileira, das artes visuais e do artesanato tradicional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#sobre"
              className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Conheça Nossa História
            </a>
            <a
              href="#contato"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-red-600 transition-all"
            >
              Entre em Contato
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
