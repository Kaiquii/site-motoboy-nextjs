export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-2">Meus Serviços</h2>
        <p className="text-yellow-500 dark:text-yellow-400 mb-12 text-lg">Soluções rápidas para sua necessidade.</p>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-yellow-400/40 select-none">
            <h3 className="text-2xl font-bold mb-4 select-none">Coleta e Entrega de Comida</h3>
            <p className="text-gray-600 dark:text-gray-400 select-none">
              Retiro e entrego pedidos de restaurantes, lanchonetes e apps de delivery. Agilidade para garantir que a comida chegue quente e na hora certa para o seu cliente.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-yellow-400/40 select-none">
            <h3 className="text-2xl font-bold mb-4 select-none">Área de Atendimento</h3>
            <p className="text-gray-600 dark:text-gray-400 select-none">
              Atuo em toda a região da <span className="font-bold text-yellow-500 dark:text-yellow-400 select-none">Grande São Paulo</span> e no <span className="font-bold text-yellow-500 dark:text-yellow-400 select-none">ABCD</span> (Santo André, São Bernardo, São Caetano e Diadema).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}