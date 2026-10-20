import Hero from './components/Hero';
import Autores from './components/Autores';
import Newsletter from './components/Newsletter'; // Importe aqui
import Rodape from './components/Rodape';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Hero />
      <Autores />
      <Newsletter /> 
      <Rodape />
    </div>
  );
}

export default App;