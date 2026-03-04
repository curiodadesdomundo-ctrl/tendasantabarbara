import { Calendar, Users, Lightbulb } from 'lucide-react';

const Projects = () => {
  const projects = [
    'Oficinas de Artesanato Comunitário',
    'Encontros Culturais Afro-brasileiros',
    'Formação Artística para Jovens',
    'Exposições Culturais',
    'Eventos de Cultura Popular',
    'Rodas de Conversa sobre Identidade e Cultura Negra',
  ];

  const agenda = [
    'Encontro Cultural Comunitário',
    'Semana da Consciência Negra',
    'Feira de Artesanato Local',
    'Festival Cultural Afro-brasileiro',
    'Oficinas Permanentes de Artesanato',
  ];

  const publico = [
    'Crianças',
    'Jovens',
    'Adultos',
    'Artesãos locais',
    'Comunidade tradicional',
    'Público interessado em cultura afro-brasileira',
  ];

  return (
    <section id="projetos" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Projetos e Ações
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-amber-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl shadow-lg">
            <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Lightbulb className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Projetos</h3>
            <ul className="space-y-3">
              {projects.map((project, index) => (
                <li key={index} className="flex items-start text-gray-700">
                  <span className="text-red-600 mr-3 mt-1 font-bold">✓</span>
                  <span>{project}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-2xl shadow-lg">
            <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Calendar className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Agenda Cultural</h3>
            <ul className="space-y-3">
              {agenda.map((item, index) => (
                <li key={index} className="flex items-start text-gray-700">
                  <span className="text-amber-600 mr-3 mt-1 font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl shadow-lg">
            <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Users className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Público Atendido</h3>
            <ul className="space-y-3">
              {publico.map((item, index) => (
                <li key={index} className="flex items-start text-gray-700">
                  <span className="text-orange-600 mr-3 mt-1 font-bold">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
