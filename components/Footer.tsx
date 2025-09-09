export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-gray-400 py-6">
      <div className="container mx-auto text-center">
        <p>&copy; {currentYear} Chama o Boy! - Todos os direitos reservados.</p>
        <p className="text-sm mt-1">Desenvolvido com tecnologia de ponta.</p>
      </div>
    </footer>
  );
}