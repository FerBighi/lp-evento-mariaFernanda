import { destaquesSobre } from '../data/evento';

function Sobre() {
    return (
        <section id="sobre" className="py-16 px-6 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Sobre o Festival</h2>
            <p className="text-slate-600 max-w-2xl mx-auto mb-12 text-base leading-relaxed">
                O Som da Alta Paulista reúne bandas independentes da região em dois palcos ao ar livre. Além dos shows, tem feira de artesanato, food trucks e oficinas gratuitas para quem quer começar a tocar. A renda dos ingressos solidários vai para o projeto de música da escola municipal.
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