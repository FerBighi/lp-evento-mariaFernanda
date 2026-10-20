import { useState } from 'react';
import { faq } from '../data/evento';

function ItemFaq({ pergunta, resposta }) {
    const [aberto, setAberto] = useState(false);

    return (
        <div className="bg-white rounded-xl border border-slate-100 overflow-hidden shadow-xs">
            <button
                type="button"
                onClick={() => setAberto(!aberto)}
                className="w-full text-left px-6 py-4 font-bold text-slate-800 flex justify-between items-center hover:bg-slate-50 transition-colors cursor-pointer min-h-11"
            >
                <span>{pergunta}</span>
                <span className="text-roxo-destaque text-xl">{aberto ? '−' : '+'}</span>
            </button>
            {aberto && (
                <p className="px-6 pb-4 text-sm text-slate-600 leading-relaxed border-t border-slate-50 pt-2 bg-slate-50/50">
                    {resposta}
                </p>
            )}
        </div>
    );
}

function Faq() {
    return (
        <section id="faq" className="py-16 px-6 bg-linear-to-b from-white to-roxo-fundo/20">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">Dúvidas Frequentes</h2>
                <div className="space-y-3">
                    {faq.map((item) => (
                        <ItemFaq key={item.id} pergunta={item.pergunta} resposta={item.resposta} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Faq;