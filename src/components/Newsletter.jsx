import { useState } from 'react';

function Newsletter() {
    const [email, setEmail] = useState('');
    const [enviado, setEnviado] = useState(false);

    function enviar(e) {
        e.preventDefault(); // impede a página de recarregar
        setEnviado(true);
    }

    if (enviado) {
        return (
            <section className="py-12 px-6 max-w-md mx-auto text-center">
                <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-xl shadow-sm">
                    <p role="status" className="font-medium text-lg">
                        🎉 Pronto! Vamos avisar <span className="underline font-semibold">{email}</span> sobre as novidades do evento.
                    </p>
                </div>
            </section>
        );
    }

    return (
        <section className="py-12 px-6 max-w-md mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-100">
                <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">Fique por dentro</h2>
                <p className="text-gray-500 text-sm text-center mb-6">Receba as atualizações e novidades direto no seu e-mail.</p>

                <form onSubmit={enviar} className="space-y-4">
                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-semibold text-gray-700">
                            E-mail
                        </label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="seu@email.com"
                            className="px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-800"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-700 text-white font-medium py-2.5 rounded-lg hover:bg-blue-800 transition-colors shadow-sm cursor-pointer"
                    >
                        Quero receber
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Newsletter;