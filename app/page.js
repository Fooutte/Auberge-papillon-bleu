"use client";

import { useState, useEffect } from 'react';

export default function AubergePapillon() {
  // Gestionnaire d'étapes pour la cinématique
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Étape 1 : Apparition des personnages (1.5s)
    const t1 = setTimeout(() => setStep(1), 1500);
    // Étape 2 : Apparition de la chenille et des étoiles (2.5s)
    const t2 = setTimeout(() => setStep(2), 2500);
    // Étape 3 : Envol du Papillon Géant (4.0s)
    const t3 = setTimeout(() => setStep(3), 4000);
    // Étape 4 : Fixation du site complet (5.5s)
    const t4 = setTimeout(() => setStep(4), 5500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0A1128] text-white flex flex-col items-center justify-center font-sans overflow-hidden relative">
      
      {/* ========================================== */}
      {/* 🎬 SECTION 1 : LA CINÉMATIQUE D'INTRO       */}
      {/* ========================================== */}
      {step < 4 && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0A1128] z-50 transition-opacity duration-1000">
          
          {/* Les Personnages Bleus (Étape 1) */}
          <div className={`transition-all duration-1000 transform ${step >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <div className="relative w-64 h-64 flex items-center justify-center">
              {/* Cercle d'énergie Vert Lime simulé autour des personnages */}
              <div className={`absolute inset-0 border-4 border-[#76DE19] rounded-full animate-spin [animation-duration:8s] ${step >= 1 ? 'opacity-40' : 'opacity-0'}`}></div>
              
              {/* Texte temporaire ou placeholder si tu n'as pas découpé les petits bonhommes */}
              <span className="text-sm text-[#3A9EFC] font-semibold tracking-widest uppercase">L'Expérience Humaine</span>
            </div>
          </div>

          {/* La Chenille et Étoiles Vert Lime (Étape 2) */}
          <div className={`absolute mt-[-120px] transition-all duration-1000 ${step === 2 ? 'opacity-100 scale-110' : 'opacity-0 scale-75'}`}>
            <div className="bg-[#76DE19] text-[#0A1128] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider animate-bounce">
              🐛 L'Étincelle
            </div>
          </div>

          {/* L'Envol du Papillon Géant Lumineux (Étape 3) */}
          <div className={`absolute transition-all duration-1000 transform ${step === 3 ? 'opacity-100 scale-125 filter drop-shadow-[0_0_30px_rgba(58,158,252,0.8)]' : 'opacity-0 scale-50'}`}>
            <img 
              src="/papillon.png" 
              alt="Le Papillon Bleu" 
              className="w-72 md:w-96 h-auto animate-pulse"
            />
          </div>

        </div>
      )}

      {/* ========================================== */}
      {/* 🌐 SECTION 2 : LE SITE VITRINE ÉPURÉ       */}
      {/* ========================================== */}
      <main className={`w-full max-w-4xl px-6 flex flex-col items-center text-center transition-all duration-1000 ${step === 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Le Logo Complet Stabilisé */}
        <div className="w-48 md:w-64 mb-8 filter drop-shadow-[0_0_15px_rgba(58,158,252,0.3)]">
          <img src="/logo-complet.png" alt="Auberge du Papillon Bleu" className="w-full h-auto" />
        </div>

        {/* Le Titre Blanc Épuré qui percute */}
        <h1 className="text-4xl md:text-6xl font-light tracking-[0.2em] uppercase text-white mb-4">
          Auberge
        </h1>
        <h2 className="text-xl md:text-2xl font-light tracking-[0.4em] uppercase text-[#3A9EFC] mb-12">
          Papillon Bleu
        </h2>

        {/* Le Teaser Mystérieux */}
        <p className="text-lg md:text-xl font-light tracking-wide text-gray-400 max-w-md mb-12 leading-relaxed">
          Un nouveau refuge d'inspiration et de reconnexion se prépare entre fleuve et nature. 
        </p>

        {/* Capture de courriel minimaliste (CTA) */}
        <div className="w-full max-w-md flex flex-col sm:flex-row gap-3">
          <input 
            type="email" 
            placeholder="Votre adresse courriel" 
            className="flex-1 bg-[#121E41] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#3A9EFC] transition-colors"
          />
          <button className="bg-[#76DE19] hover:bg-[#65bd14] text-[#0A1128] font-bold tracking-wider uppercase px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
            Suivre l'envol
          </button>
        </div>

      </main>

      {/* Petites lucioles/étoiles flottantes discrètes en arrière-plan */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute w-2 h-2 bg-[#3A9EFC] rounded-full top-1/4 left-1/4 animate-ping [animation-duration:4s]"></div>
        <div className="absolute w-1.5 h-1.5 bg-[#76DE19] rounded-full top-1/3 right-1/4 animate-ping [animation-duration:6s]"></div>
        <div className="absolute w-2 h-2 bg-white rounded-full bottom-1/4 right-1/3 animate-ping [animation-duration:5s]"></div>
      </div>

    </div>
  );
}

// Force build
