import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-gray-900 bg-opacity-50 backdrop-blur-md p-4 fixed w-full z-20 top-0 left-0">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-2xl">
          <Link href="/">
            Chama <span className="inline-block mx-1">🔥</span><span className="inline-block mx-2">o</span><span className="bg-yellow-500 text-gray-900 py-2 px-2 rounded-md ml-2">boy moto frete!</span>
          </Link>
        </div>
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#home" className="text-gray-300 hover:text-yellow-400">Home</a>
          <a href="#servicos" className="text-gray-300 hover:text-yellow-400">Serviços</a>
          <a href="#contato" className="text-gray-300 hover:text-yellow-400">Contato</a>
        </div>
      </nav>
    </header>
  );
}