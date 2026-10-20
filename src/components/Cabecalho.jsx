import { useState } from 'react';
import { evento } from '../data/evento';

function Cabecalho() {
    const [menuAberto, setMenuAberto] = useState(false);

    return (
        <nav className="bg-white text-slate-800 sticky top-0 z-50 px-4 py-4 shadow-sm border-b border-roxo-fundo flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex justify-between items-center w-full sm:w-auto">
                <span className="font-extrabold text-xl tracking-wide text-roxo-destaque">
                    {evento.nome}
                </span>
                <button
                    onClick={() => setMenuAberto(!menuAberto)}
                    className="sm:hidden bg-roxo-fundo text-roxo-destaque font-bold px-3 py-1.5 rounded-lg text-xs cursor-pointer min-h-11 flex items-center"
                >
                    {menuAberto ? 'Fechar X' : 'Menu ☰'}
                </button>
            </div>

            <ul className={`${menuAberto ? 'flex' : 'hidden'} sm:flex flex-col sm:flex-row justify-center items-center text-center gap-x-3 gap-y-2 text-xs sm:text-sm font-semibold w-full sm:w-auto whitespace-nowrap`}>
                <li><a href="#sobre" onClick={() => setMenuAberto(false)} className="hover:text-rosa-destaque transition-colors py-1 block">Sobre</a></li>
                <li><a href="#programacao" onClick={() => setMenuAberto(false)} className="hover:text-rosa-destaque transition-colors py-1 block">Programação</a></li>
                <li><a href="#atracoes" onClick={() => setMenuAberto(false)} className="hover:text-rosa-destaque transition-colors py-1 block">Atrações</a></li>
                <li><a href="#faq" onClick={() => setMenuAberto(false)} className="hover:text-rosa-destaque transition-colors py-1 block">FAQ</a></li>
                <li><a href="#inscricao" onClick={() => setMenuAberto(false)} className="hover:text-rosa-destaque transition-colors py-1 block text-roxo-destaque font-bold">Garantir Ingresso</a></li>
            </ul>
        </nav>
    );
}

export default Cabecalho;
