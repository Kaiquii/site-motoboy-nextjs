"use client";

import { useState } from "react";

function resumirEndereco(endereco: string) {
  const partes = endereco.split(",").map((p) => p.trim());
  const ruaNumero = partes[0] || "";
  const bairro = partes[1] || "";
  const cidade = partes.find((p) =>
    /São Paulo|do Sul|do Campo|Campinas|Santos|Guarulhos|Barueri|Osasco|Sorocaba|Ribeirão Preto|Bauru|Jundiaí|Diadema|Mauá|Carapicuíba|Suzano|Taboão da Serra|Franco da Rocha|Itapevi|Cotia|Indaiatuba|Piracicaba|Americana|Santo André/i.test(
      p
    )
  );
  const estado = partes.find((p) =>
    /\bSP\b|\bMG\b|\bRJ\b|\bES\b|\bPR\b|\bRS\b|\bSC\b|\bDF\b|\bGO\b|\bMT\b|\bMS\b|\bTO\b|\bRO\b|\bRR\b|\bPA\b|\bAM\b|\bAC\b|\bAP\b|\bPE\b|\bPB\b|\bRN\b|\bCE\b|\bPI\b|\bMA\b|\bAL\b|\bSE\b|\bBA\b/i.test(
      p
    )
  );
  return [ruaNumero, bairro, cidade, estado].filter(Boolean).join(", ");
}

export default function ContactForm() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [servico, setServico] = useState("Entrega de Comida");
  const [descricao, setDescricao] = useState("");
  const [enderecoRetirada, setEnderecoRetirada] = useState("");
  const [coordenadasRetirada, setCoordenadasRetirada] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const [buscaRetirada, setBuscaRetirada] = useState("");
  const [loadingRetirada, setLoadingRetirada] = useState(false);

  const [enderecoEntrega, setEnderecoEntrega] = useState("");
  const [coordenadasEntrega, setCoordenadasEntrega] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const [buscaEntrega, setBuscaEntrega] = useState("");
  const [loadingEntrega, setLoadingEntrega] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!nome || !email || !descricao) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    const numeroWhatsapp = "5511989040195";

    // Validar apenas o campo de descrição
    if (descricao.length > 300) {
      alert("Descrição muito longa. Por favor, reduza o tamanho da descrição.");
      return;
    }

    // Mensagem simples com apenas os dados do formulário
    const mensagemSimples = `Solicitação de Entrega - Chama o Boy!

Cliente: ${nome}
Email: ${email}
Serviço: ${servico}

Retirada: ${enderecoRetirada || buscaRetirada || "Não informado"}
Entrega: ${enderecoEntrega || buscaEntrega || "Não informado"}

Descrição: ${descricao}

Disponível 24h`;

    const mensagemCodificada = encodeURIComponent(mensagemSimples.trim());
    const url = `https://wa.me/${numeroWhatsapp}?text=${mensagemCodificada}`;

    // Debug: verificar valores dos endereços
    console.log("Endereço Retirada (API):", enderecoRetirada);
    console.log("Busca Retirada (campo):", buscaRetirada);
    console.log("Endereço Entrega (API):", enderecoEntrega);
    console.log("Busca Entrega (campo):", buscaEntrega);

    console.log("URL do WhatsApp:", url);
    console.log("Mensagem:", mensagemSimples);
    console.log("Tamanho da mensagem:", mensagemSimples.length);
    console.log("Tamanho da URL:", url.length);

    if (typeof window !== "undefined") {
      // Solução simples e direta
      try {
        window.location.href = url;
        console.log("Redirecionando para WhatsApp");
      } catch (error) {
        console.error("Erro ao abrir WhatsApp:", error);
        window.open(url, "_blank");
      }
    } else {
      console.error("Window não está disponível");
    }
  };
  return (
    <section
      id="contato"
      className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden"
    >
      {/* Background decorativo */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 bg-yellow-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-yellow-400 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-yellow-500/10 backdrop-blur-sm border border-yellow-400/30 rounded-full px-6 py-2 mb-6">
            <span className="text-yellow-400 text-sm font-semibold">
              📞 Entre em Contato
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Fale{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Comigo
            </span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Preencha o formulário abaixo e eu entrarei em contato rapidamente
            para atender sua necessidade
          </p>
        </div>

        {/* Formulário Centralizado */}
        <div className="max-w-5xl mx-auto mb-12 sm:mb-16">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="nome"
                  className="block text-sm font-semibold text-gray-200 mb-2"
                >
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="nome"
                  value={nome}
                  required
                  onChange={(e) => setNome(e.target.value)}
                  className="w-full bg-gray-700/50 border border-gray-600 text-white rounded-xl p-4 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300 placeholder-gray-400"
                  placeholder="Digite seu nome completo"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-200 mb-2"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-gray-700/50 border border-gray-600 text-white rounded-xl p-4 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300 placeholder-gray-400"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="servico"
                  className="block text-sm font-semibold text-gray-200 mb-2"
                >
                  Tipo de Serviço
                </label>
                <select
                  id="servico"
                  value={servico}
                  onChange={(e) => setServico(e.target.value)}
                  className="w-full bg-gray-700/50 border border-gray-600 text-white rounded-xl p-4 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300"
                >
                  <option>Entrega de Comida</option>
                  <option>Retirada de Comida</option>
                  <option>Retirada de Itens</option>
                  <option>Entrega de Itens</option>
                  <option>Outro</option>
                </select>
              </div>
              {/* Endereço de Retirada */}
              <div>
                <label className="block text-sm font-semibold text-gray-200 mb-2">
                  <span className="flex items-center">
                    <span className="mr-2">📍</span>
                    Endereço de Retirada
                  </span>
                </label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    value={buscaRetirada}
                    onChange={(e) => setBuscaRetirada(e.target.value)}
                    placeholder="Digite o endereço de retirada..."
                    className="flex-1 bg-gray-700/50 border border-gray-600 text-white rounded-xl p-3 sm:p-4 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300 placeholder-gray-400 text-sm sm:text-base"
                  />
                  <button
                    type="button"
                    className="bg-gradient-to-r from-yellow-500 to-orange-500 text-gray-900 font-bold px-4 sm:px-6 py-3 sm:py-4 rounded-xl hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-sm sm:text-base"
                    disabled={loadingRetirada}
                    onClick={async () => {
                      if (!buscaRetirada) return;
                      setLoadingRetirada(true);
                      try {
                        const response = await fetch(
                          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
                            buscaRetirada
                          )}`
                        );
                        const data = await response.json();
                        if (data && data.length > 0) {
                          setEnderecoRetirada(data[0].display_name);
                          setCoordenadasRetirada({
                            lat: parseFloat(data[0].lat),
                            lng: parseFloat(data[0].lon),
                          });
                        } else {
                          setEnderecoRetirada("");
                          setCoordenadasRetirada(null);
                        }
                      } catch (error) {
                        console.error("Erro ao buscar endereço:", error);
                        setEnderecoRetirada("");
                        setCoordenadasRetirada(null);
                      } finally {
                        setLoadingRetirada(false);
                      }
                    }}
                  >
                    {loadingRetirada ? (
                      <div className="flex items-center space-x-2">
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-gray-900 border-t-transparent"></div>
                        <span>Buscando...</span>
                      </div>
                    ) : (
                      "Buscar"
                    )}
                  </button>
                </div>

                {enderecoRetirada && (
                  <div className="mt-3 p-3 bg-green-500/10 border border-green-500/30 rounded-xl">
                    <p className="text-green-400 text-sm font-medium">
                      ✓ Endereço de retirada selecionado:
                    </p>
                    <p className="text-gray-300 text-sm">
                      {resumirEndereco(enderecoRetirada)}
                    </p>
                  </div>
                )}

                {coordenadasRetirada && (
                  <div className="mt-4">
                    <div className="bg-gray-700/30 rounded-2xl p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-white font-semibold flex items-center">
                          <span className="mr-2">📍</span>
                          Local de Retirada
                        </h4>
                        <div className="flex items-center space-x-3">
                          <span className="text-gray-400 text-xs">
                            🖱️ Use o mouse para navegar
                          </span>
                          <a
                            href={`https://maps.google.com/?q=${
                              coordenadasRetirada!.lat
                            },${coordenadasRetirada!.lng}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-yellow-400 hover:text-yellow-300 text-sm font-medium transition-colors duration-300"
                          >
                            Abrir no Google Maps
                          </a>
                        </div>
                      </div>
                      <iframe
                        title="Mapa do endereço de retirada"
                        width="100%"
                        height="200"
                        className="rounded-xl border-2 border-yellow-400/50 shadow-lg"
                        src={`https://maps.google.com/maps?q=${
                          coordenadasRetirada!.lat
                        },${
                          coordenadasRetirada!.lng
                        }&hl=pt&z=16&output=embed&iwloc=near`}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        style={{
                          pointerEvents: "auto",
                          border: "none",
                          borderRadius: "12px",
                        }}
                        frameBorder="0"
                        scrolling="no"
                      ></iframe>
                    </div>
                  </div>
                )}
              </div>

              {/* Endereço de Entrega */}
              <div>
                <label className="block text-sm font-semibold text-gray-200 mb-2">
                  <span className="flex items-center">
                    <span className="mr-2">🎯</span>
                    Endereço de Entrega
                  </span>
                </label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    value={buscaEntrega}
                    onChange={(e) => setBuscaEntrega(e.target.value)}
                    placeholder="Digite o endereço de entrega..."
                    className="flex-1 bg-gray-700/50 border border-gray-600 text-white rounded-xl p-3 sm:p-4 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300 placeholder-gray-400 text-sm sm:text-base"
                  />
                  <button
                    type="button"
                    className="bg-gradient-to-r from-yellow-500 to-orange-500 text-gray-900 font-bold px-4 sm:px-6 py-3 sm:py-4 rounded-xl hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-sm sm:text-base"
                    disabled={loadingEntrega}
                    onClick={async () => {
                      if (!buscaEntrega) return;
                      setLoadingEntrega(true);
                      try {
                        const response = await fetch(
                          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
                            buscaEntrega
                          )}`
                        );
                        const data = await response.json();
                        if (data && data.length > 0) {
                          setEnderecoEntrega(data[0].display_name);
                          setCoordenadasEntrega({
                            lat: parseFloat(data[0].lat),
                            lng: parseFloat(data[0].lon),
                          });
                        } else {
                          setEnderecoEntrega("");
                          setCoordenadasEntrega(null);
                        }
                      } catch (error) {
                        console.error("Erro ao buscar endereço:", error);
                        setEnderecoEntrega("");
                        setCoordenadasEntrega(null);
                      } finally {
                        setLoadingEntrega(false);
                      }
                    }}
                  >
                    {loadingEntrega ? (
                      <div className="flex items-center space-x-2">
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-gray-900 border-t-transparent"></div>
                        <span>Buscando...</span>
                      </div>
                    ) : (
                      "Buscar"
                    )}
                  </button>
                </div>

                {enderecoEntrega && (
                  <div className="mt-3 p-3 bg-green-500/10 border border-green-500/30 rounded-xl">
                    <p className="text-green-400 text-sm font-medium">
                      ✓ Endereço de entrega selecionado:
                    </p>
                    <p className="text-gray-300 text-sm">
                      {resumirEndereco(enderecoEntrega)}
                    </p>
                  </div>
                )}

                {coordenadasEntrega && (
                  <div className="mt-4">
                    <div className="bg-gray-700/30 rounded-2xl p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-white font-semibold flex items-center">
                          <span className="mr-2">🎯</span>
                          Local de Entrega
                        </h4>
                        <div className="flex items-center space-x-3">
                          <span className="text-gray-400 text-xs">
                            🖱️ Use o mouse para navegar
                          </span>
                          <a
                            href={`https://maps.google.com/?q=${
                              coordenadasEntrega!.lat
                            },${coordenadasEntrega!.lng}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-yellow-400 hover:text-yellow-300 text-sm font-medium transition-colors duration-300"
                          >
                            Abrir no Google Maps
                          </a>
                        </div>
                      </div>
                      <iframe
                        title="Mapa do endereço de entrega"
                        width="100%"
                        height="200"
                        className="rounded-xl border-2 border-yellow-400/50 shadow-lg"
                        src={`https://maps.google.com/maps?q=${
                          coordenadasEntrega!.lat
                        },${
                          coordenadasEntrega!.lng
                        }&hl=pt&z=16&output=embed&iwloc=near`}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        style={{
                          pointerEvents: "auto",
                          border: "none",
                          borderRadius: "12px",
                        }}
                        frameBorder="0"
                        scrolling="no"
                      ></iframe>
                    </div>
                  </div>
                )}
              </div>

              <div>
                <label
                  htmlFor="descricao"
                  className="block text-sm font-semibold text-gray-200 mb-2"
                >
                  Descrição do Serviço
                </label>
                <textarea
                  id="descricao"
                  rows={4}
                  value={descricao}
                  required
                  onChange={(e) => setDescricao(e.target.value)}
                  className="w-full bg-gray-700/50 border border-gray-600 text-white rounded-xl p-4 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300 placeholder-gray-400 resize-none"
                  placeholder="Ex: Retirar pedido no restaurante X e entregar no endereço Y..."
                ></textarea>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xs text-gray-400">
                    {descricao.length}/300 caracteres
                  </span>
                  {descricao.length > 300 && (
                    <span className="text-xs text-red-400">
                      Limite excedido!
                    </span>
                  )}
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-gray-900 font-bold py-4 px-8 rounded-2xl text-lg hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-yellow-500/25"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <span>📱</span>
                    <span>Enviar via WhatsApp</span>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Informações de Contato */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Informações de contato */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Informações de Contato
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📱</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">WhatsApp</h4>
                    <p className="text-gray-300">(11) 98904-0195</p>
                    <p className="text-sm text-gray-400">Disponível 24h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      Área de Atendimento
                    </h4>
                    <p className="text-gray-300">Grande São Paulo e ABCD</p>
                    <p className="text-sm text-gray-400">Cobertura completa</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      Tempo de Resposta
                    </h4>
                    <p className="text-gray-300">Resposta imediata</p>
                    <p className="text-sm text-gray-400">Via WhatsApp</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefícios */}
            <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-400/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">
                Por que escolher nossos serviços?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                  Entrega rápida e segura
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                  Atendimento 24 horas
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                  Cobertura em toda Grande SP
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                  Preços competitivos
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
