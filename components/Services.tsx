export default function Services() {
  const services = [
    {
      icon: "🚚",
      title: "Coleta e Entrega de Produtos",
      description:
        "Serviço de retirada e entrega rápida de encomendas, produtos diversos. Compromisso com a agilidade, segurança e pontualidade em cada entrega.",
      features: [
        "Entregas ágeis e seguras",
        "Coleta no local combinado",
        "Rastreamento e suporte",
        "Atendimento para empresas e particulares",
      ],
    },
    {
      icon: "📍",
      title: "Área de Atendimento",
      description:
        "Atuo em toda a região da Grande São Paulo, Litoral, Interior, outros estados consulte valores, oferecendo cobertura completa para suas necessidades de entrega.",
      features: [
        "Grande SP",
        "ABCD",
        "Litoral",
        "Interior",
      ],
    },
    {
      icon: "⚡",
      title: "Serviço das 08h ás 20h",
      description:
        "Atendimento ágil e disponível durante todo o dia para atender suas demandas com rapidez e eficiência.",
      features: [
        "Seg a Sáb, das 08h às 20h",
        "Atendimento emergencial",
        "Compromisso com a disponibilidade",
      ],
    },
    {
      icon: "🛡️",
      title: "Segurança Garantida",
      description:
        "Seus pedidos são transportados com máxima segurança e cuidado, garantindo a integridade dos produtos.",
      features: [
        "Segurança total",
        "Cuidado especial",
        "Produtos protegidos",
        "Rastreamento",
      ],
    },
  ];

  return (
    <section
      id="servicos"
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-4 sm:left-10 w-24 h-24 sm:w-32 sm:h-32 bg-yellow-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-4 sm:right-10 w-32 h-32 sm:w-40 sm:h-40 bg-orange-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center bg-yellow-500/10 backdrop-blur-sm border border-yellow-400/30 rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6">
            <span className="text-yellow-600 dark:text-yellow-400 text-xs sm:text-sm font-semibold">
              🚀 Nossos Serviços
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4 sm:mb-6">
            Soluções{" "}
            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
              completas
            </span>{" "}
            para você
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-2">
            Oferecemos serviços de entrega profissional com rapidez, segurança e
            qualidade excepcional
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-800 p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700 hover:border-yellow-400/50"
            >
              {/* Ícone */}
              <div className="text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Conteúdo */}
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center text-sm text-gray-500 dark:text-gray-400"
                  >
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 group-hover:bg-orange-500 transition-colors duration-300"></div>
                    {feature}
                  </div>
                ))}
              </div>

              {/* Efeito hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-orange-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 max-w-4xl mx-auto shadow-2xl">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Pronto para fazer seu pedido?
            </h3>
            <p className="text-gray-800 text-base sm:text-lg mb-6 sm:mb-8 px-2">
              Entre em contato agora mesmo e tenha sua entrega com rapidez e
              segurança!
            </p>
            <a
              href="#contato"
              className="inline-block bg-gray-900 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-2xl text-base sm:text-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto"
            >
              Solicitar Entrega Agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
