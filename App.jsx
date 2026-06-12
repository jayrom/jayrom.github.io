import React from 'react';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-[#F5F7F2] text-[#1F1300] font-sans selection:bg-[#6193FF] selection:text-white">
      
      {/* 1. Navbar (Sticky) */}
      <nav className="sticky top-0 z-50 w-full bg-[#F5F7F2]/90 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-xl tracking-tight">Jayro Mazzi Junior</div>
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <a href="#filosofia" className="hover:text-[#6193FF] transition-colors">Filosofia</a>
            <a href="#projetos" className="hover:text-[#6193FF] transition-colors">Casos de Estudo</a>
            <a href="#ecossistema" className="hover:text-[#6193FF] transition-colors">Ecossistema</a>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/jayrom" target="_blank" rel="noreferrer" className="hover:text-[#6193FF] transition-colors">
              GitHub
            </a>
            <a href="https://linkedin.com/in/jayromazzi" target="_blank" rel="noreferrer" className="hover:text-[#6193FF] transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-32 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
          Estratégia de Produto & <span className="text-[#6193FF]">Inteligência Artificial</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
          Conectando quase uma década de excelência em UX corporativo com arquiteturas modernas de IA para criar produtos éticos, escaláveis e centrados no ser humano.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#projetos" className="bg-[#6193FF] text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors shadow-sm">
            Explorar Casos de Estudo
          </a>
          <a href="https://linkedin.com/in/jayromazzi" className="border border-[#1F1300] px-8 py-3 rounded-lg font-medium hover:bg-[#1F1300] hover:text-white transition-colors">
            Conectar no LinkedIn
          </a>
        </div>
      </section>

      {/* 3. Filosofia de Trabalho */}
      <section id="filosofia" className="bg-white py-24 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Onde a Empatia encontra a Engenharia</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Acredito que a tecnologia mais complexa deve ter a interface mais humana. Com uma base sólida garantindo a usabilidade em operações de missão crítica e um foco atual no desenvolvimento de modelos generativos e RAG, atuo na ponte entre o código e o usuário.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Meu objetivo é traduzir arquiteturas robustas de Machine Learning em experiências que reduzem a sobrecarga cognitiva e geram valor real para o negócio.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {['Arquitetura da Informação (OOUX)', 'IA Explicável (XAI)', 'Engenharia de Prompts', 'Product Discovery', 'Liderança Técnica'].map((tag) => (
              <span key={tag} className="bg-[#F5F7F2] border border-gray-200 text-[#1F1300] px-4 py-2 rounded-full text-sm font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Casos de Estudo */}
      <section id="projetos" className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Casos de Estudo</h2>
          <p className="text-gray-600">Provas de conceito, MVPs e arquiteturas de IA.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-bold text-[#D33F49] tracking-wider uppercase bg-red-50 px-3 py-1 rounded-full">Em Andamento</span>
              <span className="text-gray-400 group-hover:text-[#6193FF] transition-colors">↗</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Plataforma de Inteligência Genômica</h3>
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              Democratização da interpretação de laudos médicos complexos através de um motor RAG 100% local cruzado com um Digital Twin do paciente, aplicando Progressive Disclosure para reduzir ansiedade.
            </p>
            <div className="flex gap-2 text-xs font-medium text-gray-500">
              <span className="bg-gray-100 px-2 py-1 rounded">RAG</span>
              <span className="bg-gray-100 px-2 py-1 rounded">Python</span>
              <span className="bg-gray-100 px-2 py-1 rounded">OOUX</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-bold text-green-700 tracking-wider uppercase bg-green-50 px-3 py-1 rounded-full">Concluído</span>
              <span className="text-gray-400 group-hover:text-[#6193FF] transition-colors">↗</span>
            </div>
            <h3 className="text-xl font-bold mb-3">SIMP - Sistema Inteligente Preditivo</h3>
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              Antecipação de falhas em equipamentos industriais utilizando integração ponta a ponta entre hardware (sensores), análise de dados em tempo real e modelagem de Inteligência Artificial.
            </p>
            <div className="flex gap-2 text-xs font-medium text-gray-500">
              <span className="bg-gray-100 px-2 py-1 rounded">Machine Learning</span>
              <span className="bg-gray-100 px-2 py-1 rounded">IoT</span>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Ecossistema */}
      <section id="ecossistema" className="bg-[#1F1300] text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-10">Ferramentas & Ecossistema</h2>
          <div className="flex flex-wrap justify-center gap-6 opacity-80">
            {['Figma', 'React', 'Python', 'LangChain', 'HuggingFace', 'ChromaDB', 'Streamlit'].map((tech) => (
              <span key={tech} className="text-lg font-light border border-gray-700 px-6 py-2 rounded-lg hover:border-[#6193FF] hover:text-[#6193FF] transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Footer */}
      <footer className="max-w-6xl mx-auto px-6 py-10 text-center text-sm text-gray-500">
        <p>Construído com React, Tailwind CSS e IA.</p>
        <p className="mt-2">© {new Date().getFullYear()} Jayro Mazzi Junior. Renovando o jay.pro.br.</p>
      </footer>

    </div>
  );
};

export default Portfolio;