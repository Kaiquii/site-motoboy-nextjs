export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: "url('/motoboy-background.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 p-4">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
          Sua entrega com <br />
          <span className="text-yellow-400">rapidez e segurança!</span>
        </h1>
        <p className="text-gray-200 mt-4 text-lg max-w-2xl mx-auto">Atendimento profissional para retirada e entrega de comida na Grande SP e ABCD.</p>
        <a href="#contato" className="mt-8 inline-block bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-lg text-lg hover:bg-yellow-400 transition-transform transform hover:scale-105">
          Solicitar Entrega
        </a>
      </div>
    </section>
  );
}