export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-black border-t border-yellow-400/20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-yellow-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-orange-500 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 py-8 sm:py-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
            <div className="text-white font-bold text-xl sm:text-2xl mb-3 sm:mb-4">
              <span className="text-white">Chama</span>
              <span className="inline-block mx-1">🔥</span>
              <span className="text-white">o</span>
              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-gray-900 py-1 px-2 sm:px-3 rounded-lg ml-1 text-sm sm:text-base">
                boy moto frete!
              </span>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed px-2 sm:px-0">
              Sua entrega com rapidez e segurança na Grande São Paulo e ABCD.
              Atendimento profissional 24 horas por dia.
            </p>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-white font-bold text-base sm:text-lg mb-3 sm:mb-4">
              Links Rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 text-sm"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 text-sm"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 text-sm"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-white font-bold text-base sm:text-lg mb-3 sm:mb-4">
              Contato
            </h3>
            <div className="space-y-2">
              <p className="text-gray-400 text-sm flex items-center justify-center sm:justify-start">
                <span className="mr-2">📱</span>
                (11) 98904-0195
              </p>
              <p className="text-gray-400 text-sm flex items-center justify-center sm:justify-start">
                <span className="mr-2">📍</span>
                Grande SP e ABCD
              </p>
              <p className="text-gray-400 text-sm flex items-center justify-center sm:justify-start">
                <span className="mr-2">⚡</span>
                Disponível 24h
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              &copy; {currentYear} Chama o Boy! - Todos os direitos reservados.
            </p>
            <div className="flex flex-col items-center sm:items-end space-y-1">
              <p className="text-gray-500 text-xs text-center sm:text-right">
                Desenvolvido com ❤️ e tecnologia de ponta
              </p>
              <p className="text-gray-500 text-xs text-center sm:text-right">
                Desenvolvido por{" "}
                <a
                  href="https://www.linkedin.com/in/kaiqui-lucas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300 underline"
                >
                  Kaiqui Lucas
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
