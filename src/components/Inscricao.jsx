import { useState } from 'react';
import { tiposIngresso } from '../data/evento';

function Inscricao() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [ingresso, setIngresso] = useState(tiposIngresso);
    const [quantidade, setQuantidade] = useState(1);
    const [enviado, setEnviado] = useState(false);
    const [erro, setErro] = useState('');

    function extrairPreco(textoIngresso) {
        if (textoIngresso.includes('2350')) return 2350;
        if (textoIngresso.includes('2200')) return 2200;
        return 0;
    }

    function enviar(e) {
        e.preventDefault();

        if (nome.trim().length < 3) {
            setErro('O nome deve conter pelo menos 3 letras.');
            return;
        }

        setErro('');
        setEnviado(true);
    }

    const valorTotal = extrairPreco(ingresso) * quantidade;

    if (enviado) {
        return (
            <section id="inscricao" className="py-16 px-6 max-w-md mx-auto text-center">
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-950 p-6 rounded-2xl shadow-xs">
                    <p role="status" className="font-semibold text-lg leading-relaxed">
                        Inscrição confirmada!<br />
                        Obrigado, <span className="font-black text-roxo-destaque">{nome}</span>.<br />
                        Sua reserva de <span className="font-bold">{quantidade}x</span> do tipo <span className="font-bold underline">{ingresso}</span> foi concluída.<br />
                        <span className="block mt-3 text-xl font-black text-emerald-800">Total do Pedido: R$ {valorTotal}</span>
                        <span className="block text-xs text-slate-500 mt-1">Os vouchers foram encaminhados para {email}.</span>
                    </p>
                </div>
            </section>
        );
    }

    return (
        <section id="inscricao" className="py-16 px-6 max-w-md mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-100">
                <h2 className="text-2xl font-bold text-slate-800 mb-2 text-center">Garanta seu Ingresso</h2>
                <p className="text-slate-400 text-xs text-center mb-6">Preencha o formulário abaixo para validar sua participação.</p>

                <form onSubmit={enviar} className="space-y-4">
                    {erro && (
                        <p role="alert" className="text-sm font-semibold text-rosa-destaque bg-rosa-fundo p-3 rounded-xl border border-rosa-destaque/20">
                            {erro}
                        </p>
                    )}

                    <label className="flex flex-col gap-1 text-sm font-semibold text-slate-700">
                        Nome Completo
                        <input type="text" required value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Seu nome completo" className="px-4 py-2.5 border border-slate-300 rounded-xl font-normal text-slate-800 focus:outline-none focus:ring-2 focus:ring-roxo-destaque" />
                    </label>

                    <label className="flex flex-col gap-1 text-sm font-semibold text-slate-700">
                        E-mail
                        <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="seu@email.com" className="px-4 py-2.5 border border-slate-300 rounded-xl font-normal text-slate-800 focus:outline-none focus:ring-2 focus:ring-roxo-destaque" />
                    </label>

                    <div className="grid grid-cols-3 gap-3">
                        <label className="col-span-2 flex flex-col gap-1 text-sm font-semibold text-slate-700">
                            Tipo de Ingresso
                            <select value={ingresso} onChange={(e) => setIngresso(e.target.value)} className="px-4 py-2.5 border border-slate-300 rounded-xl bg-white font-normal text-slate-800 focus:outline-none focus:ring-2 focus:ring-roxo-destaque">
                                {tiposIngresso.map((opcao) => (
                                    <option key={opcao} value={opcao}>{opcao}</option>
                                ))}
                            </select>
                        </label>

                        {/* DESAFIO 4: Input numérico de quantidade */}
                        <label className="col-span-1 flex flex-col gap-1 text-sm font-semibold text-slate-700">
                            Qtd
                            <input type="number" required min="1" max="10" value={quantidade} onChange={(e) => setQuantidade(Math.max(1, parseInt(e.target.value) || 1))} className="px-4 py-2.5 border border-slate-300 rounded-xl font-normal text-slate-800 focus:outline-none focus:ring-2 focus:ring-roxo-destaque" />
                        </label>
                    </div>

                    <div className="bg-slate-50 p-3 rounded-xl flex justify-between items-center text-sm border border-slate-100">
                        <span className="font-medium text-slate-600">Subtotal estimado:</span>
                        <span className="font-black text-slate-800 text-base">R$ {valorTotal}</span>
                    </div>

                    <button type="submit" className="w-full bg-roxo-destaque text-white font-bold py-3 rounded-xl hover:bg-opacity-95 transition-all shadow-sm cursor-pointer min-h-11 flex items-center justify-center">
                        Finalizar Inscrição
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Inscricao;