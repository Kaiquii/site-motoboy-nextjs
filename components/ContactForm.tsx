"use client";

import { useState, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function resumirEndereco(endereco: string) {
  const partes = endereco.split(',').map(p => p.trim());
  const ruaNumero = partes[0] || '';
  const bairro = partes[1] || '';
  const cidade = partes.find(p => /São Paulo|do Sul|do Campo|Campinas|Santos|Guarulhos|Barueri|Osasco|Sorocaba|Ribeirão Preto|Bauru|Jundiaí|Diadema|Mauá|Carapicuíba|Suzano|Taboão da Serra|Franco da Rocha|Itapevi|Cotia|Indaiatuba|Piracicaba|Americana|Santo André/i.test(p));
  const estado = partes.find(p => /\bSP\b|\bMG\b|\bRJ\b|\bES\b|\bPR\b|\bRS\b|\bSC\b|\bDF\b|\bGO\b|\bMT\b|\bMS\b|\bTO\b|\bRO\b|\bRR\b|\bPA\b|\bAM\b|\bAC\b|\bAP\b|\bPE\b|\bPB\b|\bRN\b|\bCE\b|\bPI\b|\bMA\b|\bAL\b|\bSE\b|\bBA\b/i.test(p));
  return [ruaNumero, bairro, cidade, estado].filter(Boolean).join(', ');
}

export default function ContactForm() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [servico, setServico] = useState('Entrega de Comida');
  const [descricao, setDescricao] = useState('');
  const [endereco, setEndereco] = useState('');
  const [coordenadas, setCoordenadas] = useState<{ lat: number; lng: number } | null>(null);
  const [busca, setBusca] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const numeroWhatsapp = '5511989040195';
    let linkEndereco = '';
    let numeroEndereco = '';
    if (endereco) {
      // Tenta extrair número do endereço
      const match = endereco.match(/\d+/);
      numeroEndereco = match ? match[0] : '';
      // Se tiver coordenadas, gera link curto
      if (coordenadas) {
        linkEndereco = `https://maps.google.com/?q=${coordenadas.lat},${coordenadas.lng}`;
      } else {
        linkEndereco = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(endereco)}`;
      }
    }
    const mensagem = `
  Olá! Solicitação enviada pelo site Chama o Boy!

  *Nome*: ${nome}

  *E-mail*: ${email}

  *Tipo de Serviço*: ${servico}

  *Endereço*: ${resumirEndereco(endereco)}${numeroEndereco ? ", Nº: " + numeroEndereco : ""}

  *Descrição*: ${descricao}

  ${linkEndereco ? `*Localização*: ${linkEndereco}` : ''}
    `;
    const mensagemCodificada = encodeURIComponent(mensagem.trim());
    const url = `https://wa.me/${numeroWhatsapp}?text=${mensagemCodificada}`;
    if (typeof window !== 'undefined') {
      window.open(url, '_blank');
    }
  };
  return (
    <section id="contato" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-4xl font-bold text-center text-white mb-8">Fale Comigo</h2>
        <form onSubmit={handleSubmit} className="space-y-6 bg-gray-800 p-8 rounded-lg shadow-lg">
          <div>
            <label htmlFor="nome" className="block text-sm font-medium text-gray-200">Nome</label>
            <input
              type="text"
              id="nome"
              value={nome}
              required
              onChange={e => setNome(e.target.value)}
              className="mt-1 block w-full bg-gray-700 border-gray-600 text-white rounded-md p-3 focus:ring-yellow-500 focus:border-yellow-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-200">E-mail</label>
            <input
              type="email"
              id="email"
              value={email}
              required
              onChange={e => setEmail(e.target.value)}
              className="mt-1 block w-full bg-gray-700 border-gray-600 text-white rounded-md p-3 focus:ring-yellow-500 focus:border-yellow-500"
            />
          </div>
          <div>
            <label htmlFor="servico" className="block text-sm font-medium text-gray-200">Tipo de Serviço</label>
            <select
              id="servico"
              value={servico}
              onChange={e => setServico(e.target.value)}
              className="mt-1 block w-full bg-gray-700 border-gray-600 text-white rounded-md p-3 focus:ring-yellow-500 focus:border-yellow-500"
            >
              <option>Entrega de Comida</option>
              <option>Retirada de Comida</option>
              <option>Retirada de Itens</option>
              <option>Entrega de Itens</option>
              <option>Outro</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-200">Endereço de Retirada ou Entrega</label>
            <div className="mt-1 flex gap-2">
              <input
                type="text"
                value={busca}
                onChange={e => setBusca(e.target.value)}
                placeholder="Digite o endereço..."
                className="block w-full bg-gray-700 border-gray-600 text-white rounded-md p-3 focus:ring-yellow-500 focus:border-yellow-500"
              />
              <button
                type="button"
                className="bg-yellow-500 text-gray-900 font-bold px-4 py-2 rounded-lg hover:bg-yellow-400"
                onClick={async () => {
                  if (!busca) return;
                  const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(busca)}`);
                  const data = await response.json();
                  if (data && data.length > 0) {
                    setEndereco(data[0].display_name);
                    setCoordenadas({ lat: parseFloat(data[0].lat), lng: parseFloat(data[0].lon) });
                  } else {
                    setEndereco('');
                    setCoordenadas(null);
                  }
                }}
              >Buscar</button>
            </div>
            {endereco && (
              <div className="mt-2 text-sm text-gray-200">Endereço selecionado: {resumirEndereco(endereco)}</div>
            )}
            {coordenadas ? (
              <div className="mt-4 flex flex-col items-center">
                <iframe
                  title="Mapa do endereço"
                  width="100%"
                  height="250"
                  style={{ borderRadius: '16px', border: '2px solid #FFD600', boxShadow: '0 4px 24px rgba(0,0,0,0.3)' }}
                  src={`https://www.openstreetmap.org/export/embed.html?bbox=${coordenadas!.lng-0.001}%2C${coordenadas!.lat-0.0007}%2C${coordenadas!.lng+0.001}%2C${coordenadas!.lat+0.0007}&layer=mapnik&marker=${coordenadas!.lat}%2C${coordenadas!.lng}`}
                  allowFullScreen
                ></iframe>
                <a
                  href={`https://www.openstreetmap.org/?mlat=${coordenadas!.lat}&mlon=${coordenadas!.lng}#map=18/${coordenadas!.lat}/${coordenadas!.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block bg-yellow-500 text-gray-900 font-bold px-4 py-2 rounded-lg shadow hover:bg-yellow-400 transition"
                >Ver no OpenStreetMap</a>
              </div>
            ) : (
              <div className="mt-4 text-sm text-gray-400">Selecione um endereço para visualizar o mapa.</div>
            )}
          </div>
          <div>
            <label htmlFor="descricao" className="block text-sm font-medium text-gray-200">Descrição do Serviço</label>
            <textarea
              id="descricao"
              rows={4}
              value={descricao}
              required
              onChange={e => setDescricao(e.target.value)}
              className="mt-1 block w-full bg-gray-700 border-gray-600 text-white rounded-md p-3 focus:ring-yellow-500 focus:border-yellow-500"
              placeholder="Ex: Retirar pedido no restaurante X e entregar no endereço Y."
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="w-full md:w-auto bg-yellow-500 text-gray-900 font-bold py-3 px-10 rounded-lg text-lg hover:bg-yellow-400 transition-transform transform hover:scale-105"
            >
              Enviar via WhatsApp
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}