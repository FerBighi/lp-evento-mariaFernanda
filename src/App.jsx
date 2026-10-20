import Cabecalho from './components/Cabecalho';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Programacao from './components/Programacao';
import Atracoes from './components/Atracoes';
import Inscricao from './components/Inscricao';
import Faq from './components/Faq';
import Rodape from './components/Rodape';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Cabecalho />
      <main className="grow">
        <Hero />
        <Sobre />
        <Programacao />
        <Atracoes />
        <Inscricao />
        <Faq />
      </main>
      <Rodape />
    </div>
  );
}

export default App;