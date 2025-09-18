export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

      <div className="absolute top-20 left-4 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 bg-yellow-400/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-4 sm:right-10 w-24 h-24 sm:w-32 sm:h-32 bg-yellow-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 sm:w-16 sm:h-16 bg-yellow-300/15 rounded-full blur-lg animate-bounce delay-500"></div>

      <div className="relative z-10 p-3 sm:p-4 max-w-6xl mx-auto">
        <div className="inline-flex items-center bg-yellow-500/10 backdrop-blur-sm border border-yellow-400/30 rounded-full px-4 sm:px-6 py-2 mb-6 sm:mb-8 animate-fade-in">
          <span className="text-yellow-400 text-xs sm:text-sm font-semibold">
            🚀 Entrega Rápida e Segura
          </span>
        </div>

        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-4 sm:mb-6 animate-slide-up">
          Sua entrega com{" "}
          <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent animate-gradient">
            rapidez e segurança!
          </span>
        </h1>

        <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2 animate-fade-in delay-300">
          Atendimento profissional para retirada e entrega de comida na{" "}
          <span className="text-yellow-400 font-semibold">Grande SP</span> e{" "}
          <span className="text-yellow-400 font-semibold">ABCD</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-fade-in delay-500 px-2">
          <a
            href="#contato"
            className="group relative bg-gradient-to-r from-yellow-500 to-orange-500 text-gray-900 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-2xl text-base sm:text-lg hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/25 w-full sm:w-auto"
          >
            <span className="relative z-10">Solicitar Entrega</span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>

          <a
            href="#servicos"
            className="group border-2 border-white/30 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-2xl text-base sm:text-lg hover:border-yellow-400 hover:text-yellow-400 transition-all duration-300 backdrop-blur-sm bg-white/5 w-full sm:w-auto"
          >
            Ver Serviços
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-16 max-w-2xl mx-auto animate-fade-in delay-700 px-2">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400">100%</div>
            <div className="text-gray-400 text-sm">Segurança</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400">24h</div>
            <div className="text-gray-400 text-sm">Disponível</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400">+500</div>
            <div className="text-gray-400 text-sm">Entregas</div>
          </div>
        </div>
      </div>
    </section>
  );
}
