import { evento } from '../data/evento';

function Cabecalho() {
    return (
        <nav className="bg-white text-slate-800 sticky top-0 z-50 px-6 py-4 shadow-sm border-b border-roxo-fundo flex flex-col sm:flex-row justify-between items-center gap-4">
            <span className="font-extrabold text-xl tracking-wide text-roxo-destaque text-center w-full sm:w-auto">
                {evento.nome}
            </span>
            {/* CORRIGIDO: Adicionado justify-center e text-center para centralizar no celular */}
            <ul className="flex flex-wrap justify-center items-center text-center gap-x-6 gap-y-2 text-sm font-semibold w-full sm:w-auto">
                <li>
                    <a href="#sobre" className="hover:text-rosa-destaque transition-colors py-2 block">Sobre</a>
                </li>
                <li>
                    <a href="#programacao" className="hover:text-rosa-destaque transition-colors py-2 block">Programação</a>
                </li>
                <li>
                    <a href="#atracoes" className="hover:text-rosa-destaque transition-colors py-2 block">Atrações</a>
                </li>
                <li>
                    <a href="#inscricao" className="hover:text-rosa-destaque transition-colors py-2 block text-roxo-destaque font-bold">Garantir Ingresso</a>
                </li>
            </ul>
        </nav>
    );
}

export default Cabecalho;