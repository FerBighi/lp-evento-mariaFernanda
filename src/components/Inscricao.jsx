import { useState } from 'react';
import { tiposIngresso } from '../data/evento';

function Inscricao() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    // Inicia o estado com o primeiro tipo de ingresso do array de dados
    const [ingresso, setIngresso] = useState(tiposIngresso[0]);
    const [enviado, setEnviado] = useState(false);

    function enviar(e) {
        e.preventDefault(); // Impede a página de recarregar
        setEnviado(true);
    }

    // Tela de Confirmação de Sucesso (Aparece após o envio)
    if (enviado) {
        return (
            <section id="inscricao" className="py-16 px-6 max-w-md mx-auto text-center">
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-950 p-6 rounded-2xl shadow-xs">
                    <p role="status" className="font-semibold text-lg leading-relaxed">
                        Inscrição confirmada!<br />
                        Obrigado, <span className="font-black text-roxo-destaque">{nome}</span>. Seu ingresso do tipo <span className="font-bold underline">{ingresso}</span> foi reservado e enviado para <span className="italic">{email}</span>. Nos vemos no Parque das Águas!
                    </p>
                </div>
            </section>
        );
    }

    // Formulário Controlado
    return (
        <section id="inscricao" className="py-16 px-6 max-w-md mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-100">
                <h2 className="text-2xl font-bold text-slate-800 mb-2 text-center">Garanta seu Ingresso</h2>
                <p className="text-slate-400 text-xs text-center mb-6">Preencha o formulário abaixo para validar sua participação.</p>

                <form onSubmit={enviar} className="space-y-4">
                    <label className="flex flex-col gap-1 text-sm font-semibold text-slate-700">
                        Nome Completo
                        <input
                            type="text"
                            required
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            placeholder="Seu nome completo"
                            className="px-4 py-2.5 border border-slate-300 rounded-xl font-normal text-slate-800 focus:outline-none focus:ring-2 focus:ring-roxo-destaque"
                        />
                    </label>

                    <label className="flex flex-col gap-1 text-sm font-semibold text-slate-700">
                        E-mail
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="seu@email.com"
                            className="px-4 py-2.5 border border-slate-300 rounded-xl font-normal text-slate-800 focus:outline-none focus:ring-2 focus:ring-roxo-destaque"
                        />
                    </label>

                    <label className="flex flex-col gap-1 text-sm font-semibold text-slate-700">
                        Tipo de Ingresso
                        <select
                            value={ingresso}
                            onChange={(e) => setIngresso(e.target.value)}
                            className="px-4 py-2.5 border border-slate-300 rounded-xl bg-white font-normal text-slate-800 focus:outline-none focus:ring-2 focus:ring-roxo-destaque"
                        >
                            {tiposIngresso.map((opcao) => (
                                <option key={opcao} value={opcao}>{opcao}</option>
                            ))}
                        </select>
                    </label>

                    <button
                        type="submit"
                        className="w-full bg-roxo-destaque text-white font-bold py-3 rounded-xl hover:bg-opacity-95 transition-all shadow-sm mt-2 cursor-pointer min-h-11 flex items-center justify-center"
                    >
                        Finalizar Inscrição
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Inscricao;