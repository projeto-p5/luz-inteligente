import { useState } from "react";
import { X } from "lucide-react";
import heroImage from "@/IMAGENS/imagem-principal.jpg";

// 
//  ✏️ EDITAR AQUI — DADOS DO SEU GRUPO
//  Troque os textos entre as aspas
// 

const DADOS_DO_GRUPO = {
  titulo: "TÍTULO DO TRABALHO",                    // ← Troque pelo título
  descricao: "DESCRIÇÃO BÁSICA DO SEU TRABALHO",   // ← Troque pela descrição
  materias: ["Programação", "Física", "Robótica"], // ← Troque pelas matérias
  videoYouTube: "22nd99SLgNA",                     // ← ID do vídeo do YouTube (o que vem depois do v=)
  imagem: "imagem-principal.jpg",                  // ← Nome da imagem na pasta IMAGENS
  nomeProjeto: "Projeto Integrador",               // ← Nome que aparece no topo da página
};

// 
//  ⚙️ NÃO EDITAR NADA ABAIXO DESTA LINHA
// 

const Inicio = () => {
  const [videoAberto, setVideoAberto] = useState(false);

  const buttonClass =
    "px-10 py-3.5 text-sm font-semibold tracking-[0.15em] uppercase rounded-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Tela cheia com imagem de fundo */}
      <div className="relative w-full h-screen min-h-[600px]">
        <img
          src={heroImage}
          alt="Imagem do projeto"
          className="absolute inset-0 w-full h-full object-cover object-center animate-ken-burns"
        />
        <div className="absolute inset-0 bg-black/35" />

        <header className="absolute top-0 left-0 right-0 z-50 animate-fade-in">
          <div className="flex items-center h-16 max-w-6xl mx-auto px-6 md:px-12">
            <span className="font-bold text-lg md:text-xl text-white">{DADOS_DO_GRUPO.nomeProjeto}</span>
          </div>
        </header>

        <div className="absolute inset-0 flex items-center pt-16">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-[1fr_auto] gap-12 md:gap-20 items-start">
              <div>
                <p className="uppercase text-sm md:text-base font-semibold tracking-[0.15em] text-white/80 mb-6">
                  APRESENTAÇÕES
                </p>

                <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tight text-white mb-8 leading-[1.05] animate-fade-up">
                  {DADOS_DO_GRUPO.titulo}
                </h1>

                <p className="text-sm md:text-base leading-relaxed text-white/75 max-w-lg">
                  {DADOS_DO_GRUPO.descricao}
                </p>
              </div>

              {/* Matérias + Botão (desktop) */}
              <div className="hidden md:flex flex-col gap-6 text-white pt-4">
                <div className="leading-relaxed font-medium space-y-1">
                  {DADOS_DO_GRUPO.materias.map((materia) => (
                    <p key={materia}>{materia}</p>
                  ))}
                </div>

                <button
                  onClick={() => setVideoAberto(true)}
                  className={`${buttonClass} bg-white text-foreground hover:bg-white/90`}
                >
                  ▶ Assistir vídeo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Matérias + Botão (mobile) */}
      <div className="md:hidden bg-foreground text-background px-6 py-8 space-y-4 text-sm">
        <div className="leading-relaxed font-medium space-y-1">
          {DADOS_DO_GRUPO.materias.map((materia) => (
            <p key={materia}>{materia}</p>
          ))}
        </div>
        <button
          onClick={() => setVideoAberto(true)}
          className={`${buttonClass} w-full bg-background text-foreground`}
        >
          ▶ Assistir vídeo
        </button>
      </div>

      {/* Player do vídeo */}
      {videoAberto && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/80 animate-overlay-in"
            onClick={() => setVideoAberto(false)}
          />

          <div className="relative w-full max-w-3xl animate-dialog-in">
            <button
              onClick={() => setVideoAberto(false)}
              aria-label="Fechar vídeo"
              className="absolute -top-10 right-0 text-white/80 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="aspect-video w-full bg-black rounded-sm overflow-hidden">
              <iframe
                src={`https://www.youtube.com/embed/${DADOS_DO_GRUPO.videoYouTube}?autoplay=1&rel=0`}
                title="Vídeo do projeto"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Inicio;