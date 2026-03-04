import { MapPin, Phone, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contato" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Entre em Contato
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-amber-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Estamos prontos para atender você e sua comunidade
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all text-center">
            <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Localização</h3>
            <p className="text-gray-700 leading-relaxed">
              Presidente Sarney – Três Furos<br />
              Maranhão – Brasil
            </p>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all text-center">
            <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Telefone</h3>
            <a
              href="tel:+5598981652322"
              className="text-gray-700 hover:text-amber-600 transition-colors text-lg"
            >
              (98) 98165-2322
            </a>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all text-center">
            <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Instagram className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Instagram</h3>
            <a
              href="https://instagram.com/tendas.barbarap.s.raimund"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-orange-600 transition-colors"
            >
              @tendas.barbarap.s.raimund
            </a>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-red-600 to-amber-500 p-1 rounded-2xl">
          <div className="bg-white p-12 rounded-2xl text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Faça Parte da Nossa Comunidade
            </h3>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Venha conhecer nosso trabalho e contribuir para o fortalecimento da cultura afro-brasileira em Presidente Sarney – Três Furos
            </p>
            <a
              href="https://instagram.com/tendas.barbarap.s.raimund"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-red-600 to-amber-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              Siga-nos no Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
