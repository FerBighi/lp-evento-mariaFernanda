import { programacao } from '../data/evento';

function Programacao() {
    return (
        <section id="programacao" className="py-16 px-6 bg-azul-fundo">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-800 text-center mb-10">Programação Oficial</h2>

                <div className="space-y-4">
                    {programacao.map((item) => (
                        <div key={item.id} className="flex bg-white rounded-xl shadow-xs overflow-hidden border border-white">
                            <span className="bg-slate-900 text-rosa-fundo font-bold px-4 py-3 flex flex-col items-center justify-center min-w-20 text-xs uppercase">
                                <span className="text-slate-400">{item.dia}</span>
                                <span className="text-sm font-black">{item.horario}</span>
                            </span>
                            <p className="p-4 text-slate-700 font-semibold text-base flex items-center">{item.atividade}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Programacao;