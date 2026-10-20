import { evento } from '../data/evento';

function Cabecalho() {
    return (
        <nav className="bg-white text-slate-800 sticky top-0 z-50 px-4 py-4 shadow-sm border-b border-roxo-fundo flex flex-col sm:flex-row justify-between items-center gap-4">
            <span className="font-extrabold text-xl tracking-wide text-roxo-destaque text-center w-full sm:w-auto">
                {evento.nome}
            </span>
            {/* CORRIGIDO: Agora tudo fica em uma linha só (flex-row), centralizado e com espaço ajustado */}
            <ul className="flex flex-row justify-center items-center text-center gap-x-3 text-xs sm:text-sm font-semibold w-full sm:w-auto whitespace-nowrap">
                <li>
                    <a href="#sobre" className="hover:text-rosa-destaque transition-colors py-1 block">Sobre</a>
                </li>
                <li>
                    <a href="#programacao" className="hover:text-rosa-destaque transition-colors py-1 block">Programação</a>
                </li>
                <li>
                    <a href="#atracoes" className="hover:text-rosa-destaque transition-colors py-1 block">Atrações</a>
                </li>
                <li>
                    <a href="#inscricao" className="hover:text-rosa-destaque transition-colors py-1 block text-roxo-destaque font-bold">Garantir Ingresso</a>
                </li>
            </ul>
        </nav>
    );
}

export default Cabecalho;