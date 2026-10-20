import { destaquesSobre, evento } from '../data/evento';

function Sobre() {
    return (
        <section id="sobre" className="py-16 px-6 max-w-4xl mx-auto text-center">
            {/* Lendo o nome dinâmico do festival */}
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Sobre o {evento.nome}</h2>

            {/* CORRIGIDO: Lendo o slogan dinâmico do Allianz Parque */}
            <p className="text-slate-600 max-w-2xl mx-auto mb-12 text-base leading-relaxed">
                {evento.slogan} Prepare-se para vivenciar uma estrutura fantástica e apresentações memoráveis das maiores estrelas do cenário pop internacional.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {destaquesSobre.map((item) => (
                    <div key={item.texto} className="p-6 bg-roxo-fundo rounded-2xl border border-white/50 shadow-xs">
                        <span className="block text-4xl font-black text-roxo-destaque mb-1">{item.numero}</span>
                        <span className="text-sm font-semibold text-slate-600 uppercase tracking-wide">{item.texto}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Sobre;